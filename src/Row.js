import React, { useState } from "react"

export default function Row(props) {
    const [local, setLocal] = useState(true)
    const handleTrash=()=>{
        let asdf={...props.tareas}
        console.log(delete(asdf[props.i]))
        props.setTareas(asdf)
        }
    return (
        <>
            {local ?
                <li type="button" className="list-group-item list-group-item-action">
                    <span onClick={() => { setLocal(!local) }} >
                        {props.elem}
                    </span>
                    <span className="badge badge-warning ml-2" onClick={() => { setLocal(!local) }}>
                        por Hacer
                    </span>
                    <span className="right">
                    <i className="fas fa-trash" onClick={()=>{handleTrash()}} ></i>
                    </span>
                </li>
                :
                <li type="button" className="list-group-item list-group-item-action">
                    <span onClick={() => { setLocal(!local) }} >
                        {props.elem}
                    </span>
                    <span className="badge badge-success ml-2" onClick={() => { setLocal(!local) }}>
                        Hecho
                    </span>
                    <span className="lefty">
                    <i className="fas fa-trash"onClick={()=>{handleTrash()}} ></i>
                    </span>
                    
                </li>
            }
        </>
    )
}