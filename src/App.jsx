
import React from "react";
import { useState } from "react";
import InputFleid from "./components/InputFleid";
import Todolist from "./components/Todolist";
import { useDispatch } from "react-redux";
import { handeleAddTodo } from "./store/todoSlice";



export default function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => dispatch(
    handeleAddTodo({text}), setText("")
    )
  


  return (
  <div className="wrapper">
     <InputFleid text = {text} setText ={setText} handeleAddTodo ={addTask}/> 
      <Todolist/>
  </div>
  
  )
}
