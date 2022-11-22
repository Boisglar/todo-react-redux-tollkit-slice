import React from 'react'

export default function InputFleid({text, setText, handeleAddTodo}) {
  return (
  
      <form onSubmit={e=>e.preventDefault()}>
    <input value={text} onChange = {(e) =>setText(e.target.value) } />
    <button onClick={handeleAddTodo}>add todo</button>
    </form>
  
  )
}
