export interface ToDoType {
  Text: string;
  Timestamp: string;
}

export interface ToDoListType {
  toDoList: ToDoType[];
  deleteTodoFunc: Function;
  modifyToDoFunc: Function;
}
