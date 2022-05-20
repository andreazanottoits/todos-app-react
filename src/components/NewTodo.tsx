import { Input, Button, Flex, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ToDoList from './ToDoList';
import date from 'date-and-time';
import { ToDoType } from '../interfaces/types';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function NewTodo() {
  const TodoTextMaxLength = 20;
  const [toDoValueText, settoDoValueText] = useState('');

  function ValidateTodoText(): boolean {
    return toDoValueText.length > TodoTextMaxLength;
  }
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
      <FormControl isInvalid={ValidateTodoText()}>
        <Flex flexFlow={'row'} justifyContent={'center'} alignItems={'center'}>
          <Box>
            <FormLabel htmlFor="text">ToDo Text</FormLabel>
            <Input
              id="text"
              size="lg"
              width={'100vh'}
              value={toDoValueText}
              placeholder="Insert Todo"
              onChange={e => {
                settoDoValueText(e.target.value);
              }}
            />
            {ValidateTodoText() ? (
              <FormErrorMessage>
                the todo text has be to shorter than 20 characters.
              </FormErrorMessage>
            ) : (
              <FormHelperText>Insert the text of the todo.</FormHelperText>
            )}
          </Box>
          <Box>
            <Button
              ml={20}
              type="submit"
              disabled={ValidateTodoText()}
              colorScheme="green"
              onClick={() => {
                addTodo();
              }}
            >
              Create ToDo
            </Button>
          </Box>
        </Flex>
      </FormControl>

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
