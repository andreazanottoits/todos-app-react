import { Input, Button, Flex, Box } from '@chakra-ui/react';
import { React, useState } from 'react';
import ToDoList from './ToDoList';
import date from 'date-and-time';

export default function NewTodo() {
  const [toDoValueText, settoDoValueText] = useState('');
  const [toDoList, settoDoList] = useState([]);

  const addTodo = () => {
    if (toDoList.filter(e => e.Text === toDoValueText).length > 0) {
      alert('Questo ToDo è già presente nella lista');
    } else if (toDoValueText !== '') {
      const now = new Date();
      let todo = {
        Text: toDoValueText,
        Timestamp: date.format(now, 'DD/MM/YYYY HH:mm:ss'),
      };
      settoDoList([...toDoList, todo]);
      settoDoValueText('');
    }
  };

  function DeleteToDoFunc(toDoId) {
    settoDoList(toDoList.filter(toDo => toDo !== toDoList[toDoId]));
  }

  function ModifyToDoFunc(toDoId) {
    const todoText = prompt('Please enter toDo');
    if (!toDoList.includes(todoText)) {
      let todoListtemp = [...toDoList];
      const now = new Date();
      todoListtemp[toDoId] = {
        Text: todoText,
        Timestamp: date.format(now, 'DD/MM/YYYY HH:mm:ss'),
      };
      settoDoList(todoListtemp);
    } else {
      alert('Questo ToDo è già presente nella lista');
    }
  }

  return (
    <Box>
      <Flex flexFlow={'row'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Input
            size="lg"
            width={'100vh'}
            value={toDoValueText}
            placeholder="Insert Todo"
            onChange={e => {
              settoDoValueText(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Button
            ml={20}
            colorScheme="green"
            onClick={() => {
              addTodo();
            }}
          >
            Create ToDo
          </Button>
        </Box>
      </Flex>
      <ToDoList
        toDoList={toDoList}
        deleteTodoFunc={DeleteToDoFunc}
        modifyToDoFunc={ModifyToDoFunc}
      />
    </Box>
  );
}
