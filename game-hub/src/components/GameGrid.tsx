
import {SimpleGrid, Text} from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {

const {games, error, isLoading} = useGames();
const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

 
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md:3, lg:4, xl: 5}} spacing={3} padding='15px'>
      {isLoading && skeletons.map(skeleton =>( 
      <GameCardContainer>
        <GameCardSkeleton key={skeleton}/>
        </GameCardContainer>))}
      {games.map((game) => (
        <GameCardContainer>
          <GameCard game={game} key={game.id}/>
        </GameCardContainer>
      ))}
    </SimpleGrid>
    </>

  )
}

export default GameGrid
