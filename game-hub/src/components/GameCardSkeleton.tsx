import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


const GameCardSkeleton = () => {
  return (
    <Card  borderRadius={10} overflow='hidden' width='200px'>
        <Skeleton height="200px"></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>

        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
