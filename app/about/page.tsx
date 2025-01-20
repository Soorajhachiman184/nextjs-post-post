'use client'
import { useState } from "react"

export default function Home (){

    const [count, setCount] = useState(0)

    const increment = () => setCount((prev)=>prev + 1);  
    return (
        <><h1>{count}</h1>
        <button onClick={increment}>count</button>
        <h3>asfasfasfasfaf</h3></>
    )
}