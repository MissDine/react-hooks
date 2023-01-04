import React , {useState}from 'react'

function UseState() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const [name, setName] = useState({firstName:"", lastName:""})
  const [items, setItems] = useState([])
  const addItem = () =>{
    setItems([...items, {id: items.length, value: Math.floor(Math.random()*10)+1}])
  }
  return (
    <div>
    Count:{count}
    <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(prevCount => prevCount+1)}>Increament</button>
      <button onClick={()=>setCount(prevCount => prevCount-1)}>Decreament</button>

    <div className="inp">
      <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
      <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
      <h2>Your first Name is: {name.firstName}</h2>
      <h2>Your first Name is: {name.lastName}</h2>
    </div>
    <div className="tem">
    <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item =>(
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default UseState