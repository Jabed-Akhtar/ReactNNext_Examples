export function TodoItem({completed, id, title}){
    return (
        <li key={id}>
            <label>
              <input type="checkbox" onChange={e => toggleTodo(id, e.target.checked)} checked={completed} />
              {title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}
