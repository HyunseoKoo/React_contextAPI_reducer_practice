
export default function todoReducer(todo, action) {
    switch (action.type) {
        case 'add': {
            const { setTodoList, addTodo, setAddTodo } = action;
            
            return [...todo, {checked:false, todo:addTodo}]
            }
            // if(addTodo !== "") {
            //     todo.unshift({checked:false, todo:addTodo});
            // }
            // localStorage.setItem('todoList', JSON.stringify(todo));
            // setTodoList(JSON.parse(localStorage.getItem('todoList')));
            // setAddTodo('');
            }};


