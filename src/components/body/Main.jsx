import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Main({todoList, onEditTodoList, onDeleteTodoList}) {
    const [done, setDone] = useState(false);

    const onCheckedBox = (e) => {
        console.log(e.target.checked);
        if(e.target.checked === false) {
            setDone(true);
        } else {
            setDone(false);
        }
        setDone((prev) => !prev)
    }
    return (
        <section className='body__container'>
            {todoList && todoList.map((todo) => (
            <>
                <div className='body__todoList'>
                    <label className='chk_box'>
                        <input type="checkbox" onChange={onEditTodoList} onClick={onCheckedBox}/>
                        <span className='on' style={{textDecoration: done ? "line-through" : "none"}}>{todo}</span>
                    </label>
                    <button 
                        className='delete__icon__background'
                        value={todo}
                        onClick={(e)=>onDeleteTodoList(e)}
                    ><FaTrash 
                        className='delete__icon'
                        value={todo}
                        onClick={(e)=>onDeleteTodoList(e)}
                    /></button>
                </div>
            </>
            )
            )}
            
        </section>
    );
}