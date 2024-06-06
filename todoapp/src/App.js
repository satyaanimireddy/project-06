import React, { useState } from 'react'
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")
  console.log(newTodo);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }])
      setNewTodo("")
    }
  }
  console.log(todos);

  const deleteTodo = (deleteId) => {
    setTodos(todos.filter((todo) => deleteId !== todo.id))
    console.log(todos);
  }
  return (
    <div className='App'>
      <h2>Todo List</h2>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      {
        todos.map((todo) => {
          return (
            <React.Fragment key={todo.id}>
              <p>{todo.text} <button onClick={() => deleteTodo(todo.id)}>delete</button></p>
            </React.Fragment>
          )
        })
      }
    </div>
  )
}
export default App