import React from 'react'
import ReactDOM from 'react-dom'
import mystyles from './myinfo.module.css'

function MyInfo(){
    //creating style object
    const myStyle={
        color:'yellow',
        backgroundColor:'green',
        padding:'10px',
        fontFamily:'Arial'
    }
    return (
        <div>
            <h3 style={{color:'red',backgroundColor:'orange'}}>Hello World</h3>
            <p style={myStyle}>Welcome to React World! Which Used for creating amazing UI application design</p>
            <p className={mystyles.bigblue}>React JS UI Design</p>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));