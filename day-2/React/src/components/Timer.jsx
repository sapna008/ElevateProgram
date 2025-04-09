import React, { useEffect, useState } from 'react'

function Timer() {
    const [sec,setSec]=useState(10)
    const [start,setStart]=useState(true)
    useEffect(()=>{
        let timer;
        if (start){
            timer=setInterval(()=>{
                setSec(sec-1)
            },1000)
        }
        return ()=>{
            clearInterval(timer)
        }
    },[sec,start])
    useEffect(()=>{
        if (sec==0){
            setSec(10)

        }
    },[sec])
    function startStop(){
      setStart(!start)
    }
    function Reset(){
      setSec(10)
      setStart(true)
    }
  return (
    <div>
        <h1>Timer: {sec}</h1>
        <button onClick={startStop}>{start?"Stop":"Start"}</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Timer
