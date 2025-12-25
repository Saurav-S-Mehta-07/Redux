import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../feature/todo/todoSlice";

export default function AddForm(){

    let [task, setTask] = useState("");
    let dispatch = useDispatch();

    let handleChange = (event)=>{
        setTask(event.target.value);
    }
    
    let handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }

    return (
        <>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="add a task " onChange={handleChange} value={task}/>
            <br />
            <br />
            <button>Add Task</button><br />
            <hr />
          </form>
        </>
    )
}