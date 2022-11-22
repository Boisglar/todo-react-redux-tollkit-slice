import React from 'react'
import { useDispatch } from 'react-redux'
import { hendeleRemoveTodo, hendeleCheckbox } from '../store/todoSlice'


export default function Todoitem({id, text, complated} ) {
  const dispatch = useDispatch()



  return (
    <li>
        <input type="checkbox" onClick={()=>dispatch(hendeleCheckbox({id}))} checked={complated} />
          <span className='todo'>{text}</span>
          <span className="delete" onClick={ ()=>dispatch(hendeleRemoveTodo({id}))}>&times;</span>
    </li>
  )
}
