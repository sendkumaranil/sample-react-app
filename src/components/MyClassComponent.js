import React from 'react'

class MyClassComponent extends React.Component{
    render(){
        let tod=new Date();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (
                <div>
                    <p>This is class Component example</p>
                    <p>Today is :{days[tod.getDay()]}</p>
                </div> 
            )
    }
}

export default MyClassComponent