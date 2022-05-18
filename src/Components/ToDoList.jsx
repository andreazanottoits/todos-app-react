import { Flex, Text, Button } from '@chakra-ui/react';

export default function ToDoList({ toDoList, deleteTodoFunc }) {
  return (
    <Flex flexDirection={'column'} height={'100vh'} width={'100vh'}>
      {toDoList.map((item, index) => (
        <Flex mt={'25'} key={index}>
          <Text flexGrow={'2'}>{item}</Text>
          <Button colorScheme="yellow">Modifica</Button>
          <Button
            ml={'5'}
            colorScheme="red"
            onClick={() => deleteTodoFunc(index)}
          >
            Elimina
          </Button>
        </Flex>
      ))}
    </Flex>
  );
}
