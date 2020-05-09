import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Row from './Row';

function App() {
  const [local, setLocal] = useState({ 1: "Ingrese Tarea" })
  const [task, setTask] = useState("")
  const [counter, setCounter] = useState(1)
  const input = useRef(null)
  const handleChange = (e) => {
    let oldLocal = { ...local }
    oldLocal[e.target.name] = e.target.value
    setTask(e.target.value)
    setLocal(oldLocal)
  }
  const handleNewTask = () => {
    setCounter(counter + 1)
    setTask("")
  }
  const handleEnter = (e) => {
    if (e.key === "Enter")
      handleNewTask()
  }
  useEffect(() => {
    input.current.focus()
  })
  return (
    <div className="wrapper container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-2 "><h1 className="text-primary" >TODOS</h1> </div>
      </div>
      <div className="row d-flex justify-content-center mb-2">
        <div className="col-4">
          <input
            className="form-control"
            type="text"
            ref={input}
            name={counter}
            onChange={(e) => { handleChange(e) }}
            onKeyUp={(e) => { handleEnter(e) }}
            value={task} />
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); handleNewTask() }} >Nuevo</button>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="alert alert-light" role="alert">
          Presionar "Enter" envia una nueva tarea, el tacho de la basura la borra. Hacer click el texto de la tarea o en el "badge" cambia de " por hacer" a "hecho" y viceversa
        </div>
      </div>
      <div className="row d-flex justify-content-center px-5">
        <div className="col">
          <ul className="list-group">
            {
              Object.keys(local).length>0?
              Object.keys(local).map((elem, i) => {
                return (
                  < >
                    {elem !== "" ?
                      <Row
                        elem={local[elem]}
                        key={i}
                        tareas={local}
                        setTareas={setLocal}
                        i={elem} />
                      : <span key={i}>""</span>
                    }
                  </>
                )
              })
              :
              <li type="button" className="list-group-item list-group-item-action d-flex justify-content-center">"Ingrese una Nueva Tarea!"</li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
