import {
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getOptimizedImage from "../services/getOptimizedImage"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres()

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="23px"
                borderRadius={8}
                src={getOptimizedImage(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="16px"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
