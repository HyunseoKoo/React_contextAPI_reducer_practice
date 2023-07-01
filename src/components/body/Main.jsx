import Todo from './Todo';


export default function Main({todoList, onDeleteTodoList, menu}) {
    const activeTodo = todoList.filter((todo) => todo.checked === false);
    const completedTodo = todoList.filter((todo) => todo.checked === true); 
    
    const menuList = [
        {menu: 'All', todoList: todoList},
        {menu: 'Active', todoList: activeTodo},
        {menu: 'Completed', todoList: completedTodo}
    ]
    return (
        <section className='body__container'>
            {menuList.map((item) => (
                menu === item.menu && item.todoList.map((todo) => (
                    <Todo
                    todo={todo}
                    onDeleteTodoList={onDeleteTodoList}
                />
                ))
            ))}
        </section>
    );
}