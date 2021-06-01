import React, { useEffect, useState } from 'react';

type propTyp = {
    text:String
}
const Colors = ({text}:propTyp) => {
    const [textArr,setTextArr] = useState([])
    var s ;
    useEffect(()=>{
        console.log(text.length)
    /*     for(var i=text.length;i>0;i--){
            s.push(text.charAt(i))
            console.log(s)
        }
        setTextArr(s) */
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Colors;