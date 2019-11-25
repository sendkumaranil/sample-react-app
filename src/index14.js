import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'

class ConditionalRendering extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggin:false
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
                return {isLoggin:!prevState.isLoggin}
            }
        )
    }

    render(){
        let btnText=this.state.isLoggin ? 'LOGOUT':'LOGIN'
        let displayText=this.state.isLoggin ? 'Logged In':'Logged Out'
        return(
            <div>
                <Button text={btnText} handleClick={this.handleClick}/>
                <h1>Hello ! You are {displayText}</h1>
            </div>
        )
    }
}

ReactDOM.render(<ConditionalRendering /> , document.getElementById('root'))