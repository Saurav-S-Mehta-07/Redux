
import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../feature/todo/todoSlice";

export default function Todo(){
    let todos = useSelector((state)=>state.todos);
    let dispatch = useDispatch();

    let handleDelete = (id)=>{
        dispatch(deleteTodo(id));
    }

    let handleMarkAsDone = (id)=>{
        dispatch(markAsDone(id));
    }
    
    return (
        <>
        <h3>Todos</h3>
        <AddForm/>
        <ul>
            {
                todos.map((todo)=>
                 <div key={todo.id}>
                   <li >
                     <span style={{color:todo.isDone&&"red", textDecoration:todo.isDone&&"line-through"}}>{todo.task}</span> 
                      &nbsp;&nbsp;&nbsp;
                      <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                      &nbsp;&nbsp;&nbsp;
                      <button onClick={()=>handleMarkAsDone(todo.id)}>Mark as Done</button>
                    </li>
                    <br />
                  </div>
                )
            }
        </ul>
        </>
    )
}