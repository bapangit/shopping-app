import React from 'react'

class Heading extends React.Component{

    constructor(props){
        super(props)
        
    this.state = {
        data:"Hello World"
    }
    }
    render(){
        return <>
        <h1>This is a Heading</h1>
        </>
    }
}

export default Heading;