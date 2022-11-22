import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './Todoitem'

export default function Todolist() {
  const todos = useSelector(state => state.todos.todos)
  return (
    <ul>
        {todos.map(item => <TodoItem key = {item.id}
        
        {...item}
        />)}
    </ul>
  )
}
