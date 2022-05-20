import { Input, Button, Flex, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ToDoList from './ToDoList';
import date from 'date-and-time';
import { ToDoType } from '../interfaces/types';

export default function NewTodo() {
  const [toDoValueText, settoDoValueText] = useState('');

  const getInitialToDosFromLocalStorage = (): ToDoType[] => {
    const storage = localStorage.getItem('toDoList');
    if (storage !== null) {
      return JSON.parse(storage);
    } else {
      return [];
    }
  };

  const [toDoList, settoDoList] = useState<Array<ToDoType>>(
    getInitialToDosFromLocalStorage
  );

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    settoDoValueText('');
  }, [toDoList]);

  const addTodo = () => {
    if (toDoValueText !== '') {
      if (toDoList.filter(todo => todo.Text === toDoValueText).length > 0) {
        alert('Questo ToDo è già presente nella lista');
      } else {
        const now = new Date();
        let todo: ToDoType = {
          Text: toDoValueText,
          Timestamp: date.format(now, 'DD/MM/YYYY HH:mm:ss'),
          Completed: false,
        };
        settoDoList([...toDoList, todo]);
      }
    }
  };

  function DeleteToDoFunc(toDoId: number) {
    settoDoList(toDoList.filter(toDo => toDo !== toDoList[toDoId]));
  }

  function ModifyTextToDoFunc(toDoId: number) {
    const todoText: string | null = prompt('Please enter toDo');
    if (todoText) {
      if (toDoList.filter(todo => todo.Text === todoText).length === 0) {
        const todoListtemp = [...toDoList];
        const now = new Date();
        todoListtemp[toDoId] = {
          Text: todoText,
          Timestamp: date.format(now, 'DD/MM/YYYY HH:mm:ss'),
          Completed: todoListtemp[toDoId].Completed,
        };
        settoDoList(todoListtemp);
      } else {
        alert('Questo ToDo è già presente nella lista');
      }
    }
  }

  function CompleteToDoFunc(index: number) {
    const todoObj = toDoList[index];
    const todoListtemp = [...toDoList];
    todoListtemp[index] = {
      Text: todoObj.Text,
      Timestamp: todoObj.Timestamp,
      Completed: !todoObj.Completed,
    };
    settoDoList(todoListtemp);
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
      {toDoList.length > 0 && (
        <ToDoList
          toDoList={toDoList}
          deleteTodoFunc={DeleteToDoFunc}
          modifyTextToDoFunc={ModifyTextToDoFunc}
          completeTodoFunc={CompleteToDoFunc}
        />
      )}
    </Box>
  );
}
