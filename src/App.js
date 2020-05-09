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
            class="form-control"
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
      <div className="row d-flex justify-content-center px-5">
        <div className="col">
          <ul className="list-group">
            {
              Object.keys(local).map((elem, i) => {
                return (
                  <>
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
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
