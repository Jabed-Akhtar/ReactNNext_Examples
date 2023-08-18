import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"

export default function App(){
  
  const [todos, setTodos] = useState([])

  function addTodo(title){
    setTodos(currentTodos => {
      return [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  console.log(todos)

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" onChange={e => toggleTodo(todo.id, e.target.checked)} checked={todo.completed} />
              {todo.title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
          )
        })}
      </ul>
    </>
  )
}
