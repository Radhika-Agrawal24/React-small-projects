import React,{useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (<div>
    <h1
      style={{ color:count>0?'green':'pink'}}> counter
    </h1>
    <p>the {count} is</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <button onClick={()=> setCount(0)}>Reset</button>
    
    <button onClick={()=> setCount( count>0&&count-1 )}>Decrement</button>
    
  </div>
  )
}

export default App
