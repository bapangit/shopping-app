import React from 'react'

function num():string{
    return "World !";
}
export default function App(){
    return<>
    <h1>Hello {num()}</h1>
    </>
}