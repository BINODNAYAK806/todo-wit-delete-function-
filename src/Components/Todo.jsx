import React from 'react'
import Todoinput from './Todoinput'
import Todolist from './Todolist'
import {v4 as uuid} from "uuid"

export default function Todo() {
    const [data,setData] = React.useState([]);


    const handleAdd =(title)=>{

        const paylode = {

            title,
            status : false,
            id : uuid()

        }
        setData([...data,paylode])

    }
    const handleDelet=(id)=>{

        const updatedata = data.filter((item) =>
        item.id !== id
        )
        setData(updatedata)


    }
    const handTog=(id)=>{


        alert(id);

    }


    const togC=(id)=>{

     const   changeTo = data.map((item)=>(
            item.id === id ?{...item,status:!item.status}:null

        ))

        setData(changeTo)

    }

  return (
    <div>
        <Todoinput onClick={handleAdd}/>
        {data.map((item)=>(
        <Todolist
        handleDelet={handleDelet}
        handTog={handTog}
        togC={togC}
        {...item}/>
        ))}
    </div>
    
  )
}
