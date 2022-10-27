import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    console.count("count");
    console.log(todos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    s;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, component: false }];
    });
    todoNameRef.current.value = null;
  }

  function toggleTodo(id) {
    const newTodo = [...todos];
    const todo = todos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodo);
  }

  function handleClearTodos() {
    const newTodos = [...todos];
    const todoToDelete = newTodos.filter((todo) => todo.complete);
    setTodos(todoToDelete);
  }
  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleClearTodos}>Clear complete</button>
      <div>{todos.filter((todo) => !todo.complete).length} left todo</div>
    </div>
  );
}

export default App;
