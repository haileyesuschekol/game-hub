import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react"
import { Game } from "../hooks/useFetch"
import PlatformIconLsit from "./PlatformIconLsit"
import CriticScore from "./CriticScore"
import getOptimizedImage from "../services/getOptimizedImage"
interface Props {
  game: Game
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getOptimizedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconLsit
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
