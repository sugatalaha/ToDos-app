// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header.js';
import Footer from './MyComponents/Footer.js'
import ToDos from './MyComponents/ToDos.js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo.js'
import About from './MyComponents/About.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutTodos from './MyComponents/AboutTodos.js';
function App() {
  let inittodos;
  if(localStorage.getItem('todos')===null)
  {
    inittodos=[]
  }
  else
  {
    inittodos=JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete=(todoDeleted)=>
  { 
    settodos(todos.filter((todo)=>
    {
      return todoDeleted!==todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  function addtodo(title,desc)
  { 
    let sno
    if(todos.length===0)
    {
      sno=0
    }
    else sno=todos[todos.length-1].sno+1;
    let obj={
      sno:sno,
      title:title,
      desc:desc
    }
    settodos([...todos,obj])
    
  }
  const [todos,settodos]=useState(inittodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <Router>
        <Header title="ToDos List" searchbar={false}/>
      <Routes>
        <Route path="/" index element={
          <div>
            <AddTodo onAddtodo={addtodo} />
            <ToDos todos={todos} onDelete={onDelete} button={"Delete"}/>
          </div>
        }>
      </Route>
        <Route path="/About" element={
          <About/>
        }>
        </Route>
        <Route path='/AboutToDos' element={<AboutTodos/>}>
        </Route>
      </Routes>
        <Footer />
    </Router>
  )
}

export default App;
