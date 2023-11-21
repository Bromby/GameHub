import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"



interface Props{
    game: Game
    
}

const GameCard = ({ game }: Props)=> {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody>
        <Heading fontSize='1xl'>{game.name}</Heading>
        {/* when you map and don't wrap - you make an array object! */}
        <HStack justifyContent='space-between'>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
        <CriticScore score={game.metacritic}></CriticScore>
        </HStack>

      </CardBody>
    </Card>
  )
}

export default GameCard
