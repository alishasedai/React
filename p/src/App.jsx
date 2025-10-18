import { useRef, useState } from 'react'
// import './App.css'
import {set, useForm} from "react-hook-form"
import {Hi} from "./Hi"



export const Rend = () => {
  
 const[count, setCount] = useState(0);
 return(
 <>
 <h2>{count}</h2>
 <button onClick={() => {
  setCount(count + 1)
 }}>Child Component</button>

 </>
 )
}
function App() {
  const [change, setChange] = useState(0)
  return (
    <>
      <h2>Hello : {change}</h2>
      <button onClick={() => {
        setChange(change + 1)
      }}>Parent Component</button>

    <Hi />
      <Rend />
    </>
  )
}

export default App
