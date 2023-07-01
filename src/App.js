
import { useEffect, useReducer, useState } from "react";
import "./App.css"
import Main from "./components/body/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import todoReducer from "./reducer/todoReducer";

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')));
  const [addTodo, setAddTodo] = useState('');
  const [menu, setMenu] = useState('All');
  const [todo, dispatch] = useReducer(todoReducer, JSON.parse(localStorage.getItem('todoList')));

  // 로컬스토리지 생성 (기존에 만들어져 있으면 리턴)
  useEffect(() => {
    if(localStorage.getItem('todoList')) return;
    else {
      let stringifyTodoList = JSON.stringify([]);
      localStorage.setItem('todoList', stringifyTodoList);
    }
  },[]);

  // 추가
  const onAddTodoList = () => {
    const newTodoList = JSON.parse(localStorage.getItem('todoList'));
    if(addTodo !== "") {
      newTodoList.unshift({checked:false, todo:addTodo});
    }
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
    setTodoList(JSON.parse(localStorage.getItem('todoList')));
    setAddTodo('');
    dispatch({type: 'add', setTodoList, addTodo, setAddTodo});
  };

  // 삭제
  const onDeleteTodoList = (e) => {
    const todoList = JSON.parse(localStorage.getItem('todoList'));
    const newTodoList = todoList.filter((todo) => todo.todo !== e.target.value);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
    setTodoList(JSON.parse(localStorage.getItem('todoList')));
  };

  return (
    <div className="todoList__container">
      <Header 
        todoList={todoList}
        menu={menu}
        setMenu={setMenu}
      />
      <Main
        todoList={todoList}
        onDeleteTodoList={onDeleteTodoList}
        menu={menu}
      />
      <Footer
        onAddTodoList={onAddTodoList}
        addTodo={addTodo}
        setAddTodo={setAddTodo}
      />
    </div>
  );
}

export default App;
