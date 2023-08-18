import { useState } from "react"

export function NewTodoForm({onSubmit}){

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        if (newItem === "") return

        onSubmit(newItem)

        //console.log("Check-1");
        /*
        setTodos(currentTodos => {
            return [
            ...currentTodos,
            { id: crypto.randomUUID(), title: newItem, completed: false },
            ]
        })
        */
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem} onInput={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
        </form>
    )
}
