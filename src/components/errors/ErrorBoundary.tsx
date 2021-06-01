import { type } from 'os';
import React, { Component } from 'react';

type MyStates = {
    hasError:boolean
}
class ErrorBoundary extends Component {
    state:MyStates = {hasError:false}
    constructor(props)
    {
        super(props);
    }

static getDerivedStateFromError(err){
    //console.log(err)
    return{hasError:true}
}
     render() {
        if(this.state.hasError){
            return <>
            <h1>Something Went Worng !</h1>
            </>
        }
        return this.props.children
    }
}

export default ErrorBoundary;