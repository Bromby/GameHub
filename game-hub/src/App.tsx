
import { Button, ButtonGroup, Grid, GridItem, Show, Text } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {

 //`"nav nav" "aside main"`
  return (
  <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
  }}>

    <GridItem area='nav'>
      <NavBar></NavBar>
    </GridItem>
    <Show above="lg">
    <GridItem area='aside'>Aside</GridItem>
    </Show>
   
    <GridItem area='main'>Main</GridItem>
  </Grid>

  
  )
}

export default App
