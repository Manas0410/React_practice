import React from 'react'
import { useState } from 'react'

const TodoP = () => {
    
    const [data, setdata] = useState([])
    const [elem, setElem] = useState({
        name: "",
        content:""
    })
    const handleChange = (e) => {
        console.log(e.target.value)
        const{name,value}=e.target
        setElem((prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    const add = () => {
        setdata((prev) => {
            return([...prev,elem])
        })
    }
  return (
    <div>
      <input type="text" name="title" onChange={handleChange} />
      <input type="text" name="content" onChange={handleChange} />
      <button onClick={add}>add</button>
      <div>
        <p>LIST</p>
              {data.map((item, i) => {
            return(<div key={i}></div> )
        })}
      </div>
    </div>
  );
}

export default TodoP
//store one  data