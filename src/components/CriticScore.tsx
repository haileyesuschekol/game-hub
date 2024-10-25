import { Badge } from "@chakra-ui/react"

interface Props {
  score: number
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : "yellow"
  return (
    <Badge fontSize="40px" colorScheme={color} paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  )
}

export default CriticScore
