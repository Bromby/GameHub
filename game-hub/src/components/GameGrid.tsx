
import {SimpleGrid, Text} from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';


const GameGrid = () => {

const {games, error, isLoading} = useGames();
const skeletons = [1,2,3,4,5,6];

 
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md:3, lg:4, xl: 6}} spacing={10} padding='15px'>
      {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
      {games.map((game) => (
        <GameCard game={game} key={game.id}/>
      ))}
    </SimpleGrid>
    </>

  )
}

export default GameGrid
