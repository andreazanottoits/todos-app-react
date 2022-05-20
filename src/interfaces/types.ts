export interface ToDoType {
  Text: string;
  Timestamp: string;
  Completed: boolean;
}

export interface ToDoListType {
  toDoList: ToDoType[];
  deleteTodoFunc: Function;
  modifyTextToDoFunc: Function;
  completeTodoFunc: Function;
}
