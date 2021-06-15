import React, { useState } from 'react';
import List from './components/List';
import Datas from './components/datas';
import { Box, Container, Button, Text } from "@chakra-ui/react";

function App() {
  const [people, setPeople] = useState(Datas);
  return (
    <Container maxW="xl" centerContent bg="pink" p={10}>
      <Box>
        <Text fontSize="3xl">{people.length} Birthdays Today</Text>
        <List people={people}/>
        <Button colorScheme="teal" size="lg" onClick={() => setPeople([])}>
          Clear All
        </Button>
      </Box>
      </Container>
  );
}

export default App;
