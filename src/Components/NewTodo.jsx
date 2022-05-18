import { Input, Button, Flex, Box } from '@chakra-ui/react';
import { React, useState } from 'react';
import ToDoList from './ToDoList';
export default function NewTodo() {
  const [toDoValue, settoDoValue] = useState('');

  const [toDoList, settoDoList] = useState([]);

  return (
    <Box>
      <Flex flexFlow={'row'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Input
            size="lg"
            value={toDoValue}
            placeholder="Insert Todo"
            onChange={e => {
              settoDoValue(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Button
            ml={20}
            colorScheme="green"
            onClick={() => {
              settoDoList([...toDoList, toDoValue]);
              console.log(toDoList);
            }}
          >
            Create ToDo
          </Button>
        </Box>
      </Flex>
      <ToDoList toDoList={toDoList} />
    </Box>
  );
}