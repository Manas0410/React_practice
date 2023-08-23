import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [count,setCount] =useState(0)
    useEffect(()=>{
        console.log("mount")
        return ()=>{console.log("unmount")}
    },[])
    useEffect(()=>{
        console.log("update")
        return ()=>{console.log("unmount")}
    },[count])
  return (
    <div>{count}
    <button onClick={()=> setCount(count+1)}>click</button>
    </div>
  )
}

export default LifeCycle