import React from 'react'
import { useState } from 'react'
const App = () => {
  const [name, setName] = useState('')
  const[salary,setSalary]=useState(0)
  const[role,setRole]=useState('')
  const[employees, setEmployees] = useState([])
  const[search,setSearch]=useState("")

  const handleClick=()=>{
    if(!name.trim())return
    setEmployees([...employees,{name,salary,role}])
 
setName('')
setRole('')
  setSalary(0)


  }
  const deleteemployee=(index)=>{
setEmployees(employees.filter((employee,i)=>i!==index));
  }
    const filteredemployee=employees.filter((employee)=>
    employee.name.toLowerCase().includes(search.toLowerCase())
  )
    return (
    <div>
      <input
  placeholder="Search user"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      <input
      type="text"
      placeholder='name'
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <input
      type="number"
      placeholder='salary'
      value={salary}
      onChange={(e)=>setSalary(Number(e.target.value))}/>
      <input
      type="text"
      placeholder='role'
      value={role}
      onChange={(e)=>setRole(e.target.value)}/>
      <button onClick={handleClick}>Submit</button>  
  {filteredemployee.map((employee, index) => (
        <p key={index}>
          {employee.name}     {employee.role}${employee.salary}
          <button onClick={()=>deleteemployee(index)}>Delete</button>
          </p>
      ))}
   
  
        </div>
  )
}

export default App