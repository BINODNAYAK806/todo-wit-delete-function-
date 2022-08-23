import React from 'react'
import Styles from "./box.module.css"
export default function Todolist({title,id,status,handleDelet,handTog,togC}) {
  return (
    <div className={Styles.box}>
        <p>{`${title} -${status}`}</p>
        <button onClick={()=>{handTog(id)}} >Alert id</button>
        <p>{id}</p>
        
        <button onClick={()=>{handleDelet(id)}}>delete</button>
    </div>
  )
}
