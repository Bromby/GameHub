
import { Button, ButtonGroup, Grid, GridItem, Show, Text } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const genreClick = (genre: Genre)  =>{
      setSelectedGenre(genre);
      console.log(genre.name);
  }

  const platformClick = (platform: Platform) =>{
    setSelectedPlatform(platform);
    console.log(platform.name);
  }

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
      <NavBar></NavBar>
    </GridItem>
    <Show above="lg">
    <GridItem area='aside' paddingX={5}>
      <GenreList onSelectGenre={(genre) => genreClick(genre)} selectedGenre={selectedGenre}></GenreList>

    </GridItem>
    </Show>
   
    <GridItem area='main'>
      <PlatformSelector onSelectPlatform={(platform) => platformClick(platform)} selectedPlatform={selectedPlatform}></PlatformSelector>
      <GameGrid genre={selectedGenre} platform={selectedPlatform}></GameGrid>
    </GridItem>
  </Grid>

  
  )
}

export default App
