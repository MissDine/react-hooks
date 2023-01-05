import React, {useState, useEffect} from 'react'
// Use effect is used to handle side effects
// Use effect runs after every  render.

function UseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [display, setDisplay] = useState(true)
    useEffect(()=>{
        console.log("Updatinf the document");
        document.title = `You clicked ${count} times`
    },[])
  return (
    <div>
    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        <button onClick={()=>setDisplay(!display)}>Toggle me</button>
    </div>
  )
}

export default UseEffect