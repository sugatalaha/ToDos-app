import React from 'react'

export default function ToDos(props) {
  console.log(props.todos)
  return (
    <div className='container'>
        <h3 className='text-center my-3'>ToDos List</h3>
        {
        (props.todos.length===0)?"No more todos to display":
          props.todos.map((todo) => {
            return (
              <>
                <li key={todo.sno}>{todo.desc}</li>
                <button type="button" className="btn btn-danger my-3" key={todo.sno + 1} onClick={() => props.onDelete(todo)}>{props.button}</button>
                <hr />
              </>)
})
        }
    </div>
  )
}
