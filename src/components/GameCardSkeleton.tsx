import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react"
const GameCardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height="200px" marginX={2} borderRadius={10} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  )
}

export default GameCardSkeleton
