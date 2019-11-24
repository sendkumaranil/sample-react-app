import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Anil Kumar',
            age:'35'
        }
    }
    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.age} Years Old</p>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'))