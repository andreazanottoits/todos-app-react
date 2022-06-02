export interface ToDoType {
  Text: string;
  Timestamp: string;
  Completed: boolean;
}

export interface ToDoListComponent {
  toDoList: ToDoType[];
  deleteTodoFunc: Function;
  modifyTextToDoFunc: Function;
  completeTodoFunc: Function;
}

export interface ErrorMessageComponent {
  errorMessage: string;
}

export interface LoginComponent {
  setToken: Function;
}
