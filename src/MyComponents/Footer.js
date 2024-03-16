import React from 'react'

export default function Footer() {
  const footerStyle={
    position: "relative",
    top: "100vh",
    width: "100%"
  }
  return (
    <div className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>Copyright &copy; MyTodos.com</p>
    </div>
  )
}
