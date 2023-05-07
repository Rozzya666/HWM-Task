import React, { useState } from 'react'
import "../style.css"
export default function Resource({resource }) {
  const [res, setRes] = useState(0)
    const handRes = (e) => {
        setRes(e.target.value)
    }
  return (
    <li className='resource'>
        <img alt={resource.name} src={resource.img}></img>
        <input onChange={handRes} value={res}></input>
    </li>
  )
}
