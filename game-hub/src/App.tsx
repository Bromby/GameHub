
import { Button, ButtonGroup, Grid, GridItem, HStack, Show, Text } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
  searchText: string;
}


function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  // const genreClick = (genre: Genre)  =>{
  //     setSelectedGenre(genre);
  //     console.log(genre.name);
  // }

  // const platformClick = (platform: Platform) =>{
  //   setSelectedPlatform(platform);
  //   console.log(platform.name);
  // }

  // const onSelectGenres = (genre: Genre) =>{
  //     setSelectedGenre(genre);
  //     console.log(genre);
  // }

 //`"nav nav" "aside main"`
  return (
  <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
  }}
  templateColumns={{
    base: '1fr',
    lg: '300px 1fr'
  }}
  >

    <GridItem area='nav'>
      <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}></NavBar>
    </GridItem>
    <Show above="lg">
    <GridItem area='aside' paddingX={5}>
      <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}></GenreList>

    </GridItem>
    </Show>
   
    <GridItem area='main'>
      <GameHeading gameQuery={gameQuery}></GameHeading>
      <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}></PlatformSelector>
          <SortSelector onSelectSortOrder={(sort) => setGameQuery({...gameQuery, sort})} sortOrder={gameQuery.sort}></SortSelector>
      </HStack>

      <GameGrid gameQuery={gameQuery}></GameGrid>
    </GridItem>
  </Grid>

  
  )
}

export default App
