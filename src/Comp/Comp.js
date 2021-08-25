import React, { useState,useEffect } from 'react'
import "./Comp.css"

function Comp() {
    const [result,setResult]= useState(0)
    const [click, setClick] = useState(0)

    const yourresult = (min,max)=>{
        const myVal = Math.floor(Math.random()*(max-min+1))+min
        setResult(myVal)
    }
useEffect(()=>{
    setInterval(()=>{
        yourresult(3,15)
    },3000)
},[])

    return (
        <div className="GeneralDiv">
            <div className="FirstDiv">
            <h1>Codelab</h1>
            <p>This is the first class</p>
            
            </div>

            <div className="boxDiv">
            <div className="boxDiv1">
            <h2 onClick={()=>{
                setClick(1)
                console.log(click)
            }}>3</h2>
            <h2>2</h2>
            <h2>1</h2>

            </div>

            <div className="boxDiv2">
            </div>
            </div>

            <div className="resultdiv">
                <h3>Result:{result}</h3>
            
            </div>
           
        </div>
    )
}

export default Comp
