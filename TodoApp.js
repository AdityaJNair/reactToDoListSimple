import TodoForm from './TodoForm.js'
import Title from './Title.js'
import TodoList from './TodoList.js'

// Contaner Component
// Todo Id
window.id = 0;
class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
    console.log("initial state")
        console.log(this.state)
  }
  // Add todo handler
  addTodo(val){
    console.log("at")
    // Assemble data
    const todo = {text: val, id: window.id++}
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data});
  }
  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    console.log("hR")
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    this.setState({data: remainder});
  }

  render(){
    // Render JSX
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList
          todos={this.state.data}
          removeFunc={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp;
