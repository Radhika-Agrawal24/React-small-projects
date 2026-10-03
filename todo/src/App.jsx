import React, { useState ,useEffect} from 'react'

const App = () => {

  const [toadd, settoadd] = useState("")
  
  const [todo, setTodo] = useState(()=>{
      const savedTodo =
    localStorage.getItem("todo")

  return savedTodo
    ? JSON.parse(savedTodo)
    : []

})
  

  const [editIndex, setEditIndex] = useState(null)
   
useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo])
 
  const handleAddOrUpdate = () => {

    if (toadd.trim() === "") return;

    // EDIT MODE 
    if (editIndex !== null) {

      const updatedTodo = [...todo]

      updatedTodo[editIndex].text = toadd

      setTodo(updatedTodo)

      setEditIndex(null)

    }

    // ADD MODE
    else {

      setTodo([
        ...todo,
        {
          text: toadd,
          completed: false
        }
      ])

    }

    settoadd("")
  }

  const completeTodo = (index) => {

    const updatedTodo = [...todo]

    updatedTodo[index].completed =
      !updatedTodo[index].completed

    setTodo(updatedTodo)
  }

  return (

    <div>

      <h1>Todo List</h1>

      <input
        type='text'
        placeholder='write todo'
        value={toadd}
        onChange={(e) => settoadd(e.target.value)}
      />

      <button onClick={handleAddOrUpdate}>

        {editIndex !== null
          ? "Update Todo"
          : "Add Todo"}

      </button>
<ul>

        {
          todo.map((item, index) => (

            <li
              key={index}
              style={{
                textDecoration:
                  item.completed
                    ? "line-through"
                    : "none"
              }}
            >

              {item.text}

              <button
                onClick={() =>
                  setTodo(
                    todo.filter((_, i) => i !== index)
                  )
                }
              >
                Delete
              </button>

              <button
                onClick={() => {

                  settoadd(item.text)

                  setEditIndex(index)

                }}
              >
                Edit
              </button>

              <button
                onClick={() =>
                  completeTodo(index)
                }
              >
                Complete
              </button>

            </li>

          ))
        }

      </ul>

    </div>

  )
}

export default App