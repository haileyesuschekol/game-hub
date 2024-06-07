import NavBar from "./components/NavBar"
import { Grid, GridItem, Show } from "@chakra-ui/react"
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside"></GridItem>
        </Show>
        <GridItem area="main"></GridItem>
      </Grid>
    </>
  )
}

export default App
