import Todo from './Todo.js'

const TodoList = ({todos, removeFunc}) => {
  // Map through the todos
  const todoNode = todos.map((obj) => {
    return (<Todo todo={obj} key={obj.id} remove={removeFunc}/>)
  });
  return (<ul>{todoNode}</ul>);
}

export default TodoList;
