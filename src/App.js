import React from "react";
import Header from "./components/Header";
import { Container, Box, Heading, Text, Divider } from "@chakra-ui/react";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxW={"container.lg"}>
        <Box textAlign={"center"} py={5}>
          <Heading size="xl">Chakra UI Demo Page</Heading>
          <Text fontSize={"lg"}>Hello from Chakra UI</Text>
        </Box>
        <Divider />
        <CardList />
      </Container>
    </div>
  );
}

export default App;
