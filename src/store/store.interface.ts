export interface Item {
  id: number;
  title: String;
  status: 'active' | 'clear';
}

export interface State {
  todoList: Item[];
}
