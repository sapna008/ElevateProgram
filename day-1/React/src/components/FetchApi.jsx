import React, { useEffect, useState } from 'react'

function FetchApi() {
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([])
    const [error,setError]=useState(null)
    useEffect(()=>{
        let fetchData=async ()=>{
            try{
                setLoading(true)
                let fetc=await fetch("https://jsonplaceholder.typicode.com/todos/")
                .then((res)=>res.json())
                .then((da)=>setData(da))
                setLoading(false)
            }catch(err){
                setError(err.message)
            }
        }
        fetchData();

    },[])
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: {error}</h1>}
      <ul>
      {
        data.map((ele,i)=>(
            <li key={i}>{ele.title}</li>
        ))
      }
      </ul>
      </div>
  )
}

export default FetchApi
