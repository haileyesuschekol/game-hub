import { SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import { Genre } from "../hooks/useGenres"
import useGames, { Platform } from "../hooks/useGames"
interface Props {
  selectedGener: Genre | null
  selectedPlatform: Platform | null
}
const GameGrid = ({ selectedGener, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGener, selectedPlatform)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      </SimpleGrid>

      {error && <Text> {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
