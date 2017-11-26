const TodoForm = ({addTodo}) => {
  // Input tracker
  let input;

  return (
    <div>
      <input type="text" ref={node => {input = node;}} />
      <button onClick={() => {addTodo(input.value); input.value = '';}}>
        ADD
      </button>
    </div>
  );
};

export default TodoForm;
