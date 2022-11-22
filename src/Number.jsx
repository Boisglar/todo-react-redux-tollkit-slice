import React from 'react'
import { useSelector } from 'react-redux'

export default function Number() {
  
const num = useSelector((state)=> state.number)

  return (
  
    <div className='number'>{num}</div>
  )
}