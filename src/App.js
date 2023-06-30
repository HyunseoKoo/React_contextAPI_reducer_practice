
import { useEffect, useState } from "react";
import "./App.css"
import Main from "./components/body/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')));
  const [addTodo, setAddTodo] = useState('');

  useEffect(() => {
    if(localStorage.getItem('todoList')) return;
    else {
      let stringifyTodoList = JSON.stringify([]);
      localStorage.setItem('todoList', stringifyTodoList);
    }
  },[]);

  const onAddTodoList = () => {
    const newTodoList = JSON.parse(localStorage.getItem('todoList'));
    if(addTodo !== "") {
      newTodoList.unshift(addTodo);
    }
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
    setTodoList(JSON.parse(localStorage.getItem('todoList')));
    setAddTodo('');
  };

  const onDeleteTodoList = (e) => {
    const todoList = JSON.parse(localStorage.getItem('todoList'));
    const newTodoList = todoList.filter((todo) => todo !== e.target.value);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
    setTodoList(JSON.parse(localStorage.getItem('todoList')));
  };

  return (
    <div className="todoList__container">
      <Header />
      <Main 
        todoList={todoList}
        onDeleteTodoList={onDeleteTodoList}
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
