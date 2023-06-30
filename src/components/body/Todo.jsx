import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Todo({todo, onDeleteTodoList}) {
    const [done, setDone] = useState(todo.checked);

    const onCheckedBox = (e) => {
        // if(e.target.checked === false) {
        //     setDone(true);
        // } else {
        //     setDone(false);
        // }
        // setDone((prev) => !prev)
        const localTodo = JSON.parse(localStorage.getItem('todoList'));
        
        // const findTodo = localTodo.filter((todo)=> todo.todo === e.target.title);
        // console.log(findTodo);
        localTodo.map((todo) => {
            if(todo.todo === e.target.title) {
              todo.checked = e.target.checked;
            }
            return todo;
        })
        localStorage.setItem('todoList', JSON.stringify(localTodo));
        setDone(e.target.checked);
    }
    return (
            <div className='body__todoList'>
                <label className='chk_box'>
                    <input 
                        type="checkbox" 
                        onClick={onCheckedBox}
                        title={todo.todo}
                    />
                    <span className='on' style={{textDecoration: done ? "line-through" : "none", color: done ? "gray" : "black"}}>{todo.todo}</span>
                </label>
                <button 
                    className='delete__icon__background'
                    value={todo.todo}
                    onClick={(e)=>onDeleteTodoList(e)}
                ><FaTrash 
                    className='delete__icon'
                    value={todo.todo}
                    onClick={(e)=>onDeleteTodoList(e)}
                /></button>
            </div>
    );
}

