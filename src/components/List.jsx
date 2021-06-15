import React from "react";
import { Box, Text, Image, VStack, HStack} from '@chakra-ui/react';

function List({ people }) {
  return (
    <div>
      {people.map((person) => {
        return (
            // <h1>{person.name}</h1>
            <VStack mb="20px">
                <HStack >
                    <Image src={person.image} borderRadius="full" boxSize="90px" objectFit="cover"/>
                    <VStack>
                        <Text>{person.name}</Text>
                        <Text>{person.age}</Text>
                    </VStack>

                </HStack>
            </VStack>
      )})}
    </div>
  );
}

export default List;
