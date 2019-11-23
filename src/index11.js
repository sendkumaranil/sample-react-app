import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component{
    render(){
        return(
            <div>
                <Header username='Anil Kumar'/>
                <Greeting />
            </div>
        )
    }
}


class Header extends React.Component{
    render(){
        return(
            <div>
                <h3>Welcome {this.props.username} !</h3>
            </div>
        )
    }
}

class Greeting extends Component{
    render(){
        let date=new Date();
        let hours=date.getHours();
        let timeofHours;

        if(hours < 12){
            timeofHours="Morning";
        }else if(hours >=12 && hours <=17){
            timeofHours="After Noon";
        }else{
            timeofHours="Night";
        }
        return(
            <div>
                <h3>Good {timeofHours} !</h3>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'))