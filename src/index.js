import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {BrowserRouter} from 'react-router-dom'

class MyShoppingCart extends React.Component{

        render(){
            return(
                <h1>Hello</h1>
            )
        }
}

ReactDOM.render(
<AppContainer>
    <BrowserRouter>
        <MyShoppingCart />
    </BrowserRouter>
</AppContainer>
,document.getElementById('root'))