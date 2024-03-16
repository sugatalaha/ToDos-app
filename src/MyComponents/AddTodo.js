import React from 'react'
import { useState } from 'react';
export default function AddTodo(props) {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  return (
    <div>
          <form>
              <div className="mb-3">
                  <label htmlFor="ToDotitle" className="form-label">ToDo Title</label>
                  <input type="email" value={title} onChange={(e)=>
                  {
                    setTitle(e.target.value);
                  }}className="form-control" id="ToDoTitle"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="desc" className="form-label" value={desc} onChange={(e)=>
                  {
                    setDesc(e.target.value);
                  }}>ToDo Description</label>
                  <input type="text" className="form-control" id="ToDoDesc"/>
              </div>
              <button type="submit" className="btn btn-success" onClick={(e)=>
              {
                e.preventDefault();
                let todoTitle=document.getElementById('ToDoTitle').value;
                let tododesc=document.getElementById('ToDoDesc').value;
                if(!todoTitle || !tododesc)
                {
                  alert("Title or description cannot be blank!");
                  return;
                }
                props.onAddtodo(todoTitle,tododesc);
                setTitle("");
                document.getElementById('ToDoTitle').value=title
                setDesc("");
                document.getElementById('ToDoDesc').value=desc;
              }}>Submit</button>
          </form>
    </div>
  )
}
