import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component{

    constructor(){
        super()
        this.state={
            today: 'Today\'s Date:' + new Date()
        }
        this.printDate=this.printDate.bind(this)
    }

    printDate(){
        console.log(this.state.today)
    }

    render(){
        return(
            <div>
                <p>
                    <input type="button" onClick={this.printDate} value="Click"/>
                </p>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'))
