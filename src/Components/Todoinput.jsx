import React from 'react'

export default function Todoinput({onClick}) {

    const [title,setTitle]= React.useState("");
  return (
    <div>
        <input type="text" placeholder='add to do' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <button onClick={()=>{onClick(title)}}  >add</button>
    </div>
  )
}
