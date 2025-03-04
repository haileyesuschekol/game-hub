import { SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import useGames from "../hooks/useGames"
import { GameQuery } from "../App"
interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]
  if (error) return <Text> {error}</Text>
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      </SimpleGrid>

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
