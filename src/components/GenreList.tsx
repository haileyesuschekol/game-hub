import {
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getOptimizedImage from "../services/getOptimizedImage"

interface Props {
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres()

  if (isLoading) return <Spinner />

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="23px"
              borderRadius={8}
              src={getOptimizedImage(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
