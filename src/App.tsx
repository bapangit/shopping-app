import React from 'react'
import Btn from '@components/buttons/Btn'
import Heading from '@components/header/Heading'

function getData(data:boolean):string{
    if(data){
        return "Hello World"
    }else{
        throw new Error("Got Error.")
    }
}
export default function App(){ 
    return<>
    <h1 style={{color:"lightblue",textAlign:"center"}}>{getData(true)}</h1>
    {/* <Btn/> */}
    <Heading/>
    </>
}
