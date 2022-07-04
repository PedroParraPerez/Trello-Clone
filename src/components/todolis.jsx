import React, { useState } from 'react';
import "./todolist.css"
const ToDoList = (props) => {
    const [title, setTitle] = useState("")
    const [task, setTask] = useState("")
    const [list, setList] = useState([])

const saveTask = (e) => {
    e.preventDefault();
    setList([...list,task])
    setTask("")
}
const deleteTask = (id) => {
    let newlist = list.filter((value, index) => id !== index)
    setList(newlist)
}
    return ( <>
    <div key={props.keys} className='todolist'>
        <span onClick={props.deletelist}>X</span>
            <h4><input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Titulo'/></h4>
        <form className='form' onSubmit={saveTask}>
            <input type="text" value={task} placeholder='Añadir Tarea...' onChange={(e)=>{setTask(e.target.value)}} on />
            {/* <button type='Submit'>Guardar</button> */}
        </form>
        <div className='listoftask'>
            <ul>
                {list.map((value,index)=>{
                    return <li className='task' key={index}>{value}<span onClick={()=>{deleteTask(index)}}>🗑️</span></li>
                })}
            </ul>
        </div>
    </div>
    
    
    
    
    </> );
}
 
export default ToDoList;