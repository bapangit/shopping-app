import React, { useEffect, useState } from 'react'

var b = true
function getData(data:boolean):string{
    if(data){
        return "Hello World !"
    }else{
        throw new Error("Got Error !")
    }
}

export default function App(){ 

    const [scolor,setColor] = useState("lightsalmon")
    useEffect(()=>{setInterval(()=>{b?setColor("lightsalmon"):setColor("lightblue");b=!b},1000)},[])
    return<>
    <h1 style={{color:scolor,textAlign:"center"}}>{getData(true)}</h1>
    </>
}