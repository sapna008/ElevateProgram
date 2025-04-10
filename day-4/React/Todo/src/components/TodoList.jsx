import { useTodo } from '../TodoContext';

function TodoList() {
  const { todos, dispatch } = useTodo();

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          />
          <span>{todo.text}</span>
          <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList