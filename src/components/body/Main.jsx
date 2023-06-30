import React, {useMemo, useRef } from 'react';
import Todo from './Todo';


export default function Main({todoList, onDeleteTodoList, menu}) {

    const activeTodo = todoList.filter((todo) => todo.checked === false);
    const completedTodo = todoList.filter((todo) => todo.checked === true); 
  
    return (
        <section className='body__container'>
            {menu === 'All' && todoList.map((todo) => (
                <Todo
                    todo={todo}
                    onDeleteTodoList={onDeleteTodoList}
                />)
            )}
            {menu === 'Active' && activeTodo.map((todo) => (
                <Todo
                    todo={todo}
                    onDeleteTodoList={onDeleteTodoList}
                />)
            )}
            {menu === 'Completed' && completedTodo.map((todo) => (
                <Todo
                    todo={todo}
                    onDeleteTodoList={onDeleteTodoList}
                />)
            )}
        </section>
    );
}