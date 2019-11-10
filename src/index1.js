import React from 'react'
import ReactDOM from 'react-dom'
import OrderInfo from './components/OrderInfo'

function MyInfo() {
    return(
        <div>
            <p>BIO:Anil Kumar is a Software Engineer and expertise to the Web Application Development</p>
        </div>
    )
}

ReactDOM.render(<h1>Welcome to Customer Portal!</h1>,document.getElementById('root'));
ReactDOM.render(<div><hr/><h3>Name: Anil Kumar</h3><ul><li>Bengaluru</li><li>Karnataka</li><li>India</li></ul></div>,
    document.getElementById('root2'));
ReactDOM.render(<MyInfo />,document.getElementById('root3'));
ReactDOM.render(<OrderInfo />,document.getElementById('root4'));


