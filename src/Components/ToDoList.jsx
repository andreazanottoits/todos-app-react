import { Flex, Box, Text, Button } from '@chakra-ui/react';

export default function ToDoList({ toDoList }) {
  return (
    <Flex flexDirection={'column'} height={'100vh'} width={'100vh'}>
      {toDoList.map(item => (
        <Box>
          <Text>{item}</Text>
          <Button colorScheme="yellow">Modifica</Button>
          <Button colorScheme="red">Elimina</Button>
        </Box>
      ))}
    </Flex>
  );
}
