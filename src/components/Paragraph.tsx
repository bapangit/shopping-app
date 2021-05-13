import React from 'react'

function xf():number{
    return 10;
}
export default function Paragraph(){
    return<>
    <p>
        This is a paragraph {xf}
    </p>
    </>
}