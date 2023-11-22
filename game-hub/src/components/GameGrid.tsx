
import {SimpleGrid, Text} from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';


interface Props{
  genre: Genre | null;
}

const GameGrid = ({genre} : Props) => {

const {data, isLoading, error} = useGames(genre);
const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

 
  return (
    <>
    {error && <Text>{error}</Text>}
    <Text>{genre?.name}</Text>
    <SimpleGrid columns={{sm: 1, md:3, lg:3, xl: 4}} spacing={3} padding='15px'>
      {isLoading && skeletons.map(skeleton =>( 
      <GameCardContainer  key={skeleton}>
        <GameCardSkeleton/>
        </GameCardContainer>))}
      {data.map((game) => (
        <GameCardContainer  key={game.id}>
          <GameCard game={game}/>
        </GameCardContainer>
      ))}
    </SimpleGrid>
    </>

  )
}

export default GameGrid
