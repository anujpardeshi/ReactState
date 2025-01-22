import { v4 as uuidv4 } from "uuid";

import { useState } from "react"

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample Task", id: uuid() }]);
    let [newTodo, setNewTodo] = useState("");
    
    let addNewTask = () => {
        if (newTodo.trim()) { // Prevent adding empty or whitespace-only tasks
            setTodos([...todos, { task: newTodo.trim(), id: uuidv4() }]);
            setNewTodo(""); // Clear the input field after adding a task
        }
    };
    
    
    // let addNewTask = () => {
    //     setTodos([...todos, newTodo]);
    // };
    
    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    };

    return (
        <div>
            <input 
                placeholder="Add a task" 
                value={newTodo}
                onChange={updateTodoValue}
            ></input>
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />

            <hr />
            <h4>Tasks ToDo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    )
}