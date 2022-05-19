import { Input, Button, Flex, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import date from "date-and-time";
import { ToDoType } from "../interfaces/test";

export default function NewTodo() {
  const [toDoValueText, settoDoValueText] = useState("");

  const getInitialToDosFromLocalStorage = (): ToDoType[] => {
    const storage = localStorage.getItem("toDoList");
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
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    settoDoValueText("");
  }, [toDoList]);

  const addTodo = () => {
    if (toDoList.filter((e) => e.Text === toDoValueText).length > 0) {
      alert("Questo ToDo è già presente nella lista");
    } else if (toDoValueText !== "") {
      const now = new Date();
      let todo: ToDoType = {
        Text: toDoValueText,
        Timestamp: date.format(now, "DD/MM/YYYY HH:mm:ss"),
      };
      settoDoList([...toDoList, todo]);
    }
  };

  function DeleteToDoFunc(toDoId: number) {
    settoDoList(toDoList.filter((toDo) => toDo !== toDoList[toDoId]));
  }

  function ModifyToDoFunc(toDoId: number) {
    const todoText: string | null = prompt("Please enter toDo");
    if (todoText != null) {
      if (toDoList.filter((todo) => todo.Text === todoText).length > 0) {
        let todoListtemp = [...toDoList];
        const now = new Date();
        todoListtemp[toDoId] = {
          Text: todoText,
          Timestamp: date.format(now, "DD/MM/YYYY HH:mm:ss"),
        };
        settoDoList(todoListtemp);
      } else {
        alert("Questo ToDo è già presente nella lista");
      }
    }
  }

  return (
    <Box>
      <Flex flexFlow={"row"} justifyContent={"center"} alignItems={"center"}>
        <Box>
          <Input
            size="lg"
            width={"100vh"}
            value={toDoValueText}
            placeholder="Insert Todo"
            onChange={(e) => {
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
          modifyToDoFunc={ModifyToDoFunc}
        />
      )}
    </Box>
  );
}
