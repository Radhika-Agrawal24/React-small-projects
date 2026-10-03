import React,{useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  return (<div>
    <h1
      style={{ color:count>0?'green':'pink'}}> counter
    </h1>
    <input 
    type="number"
    value={step}
    onChange={(e)=>setStep(Number(e.target.value))}
    />
    <p>the {count} is</p>
    <button onClick={() => setCount(count +Number(step))}>Click me</button>
    <button onClick={()=> setCount(0)}>Reset</button>
    
    <button onClick={()=> setCount( count>0&&count-Number(step))}>Decrement</button>
    
  </div>
  )
}

export default App
