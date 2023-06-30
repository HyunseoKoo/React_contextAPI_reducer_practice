import React from 'react';

export default function Footer({onAddTodoList, addTodo, setAddTodo}) {
    return (
        <div className='footer__container'>
            <section className='footer__section'>
                <input 
                    className="footer__input"
                    placeholder='Add Todo'
                    value={addTodo}
                    onChange={(e) => setAddTodo(e.target.value)}
                />
                <button 
                    className='footer__button' 
                    onClick={onAddTodoList}   
                >Add</button>
            </section>
        </div>
    );
}

