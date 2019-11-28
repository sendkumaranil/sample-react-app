import React from 'react'
import ReactDOM from 'react-dom'
import './render-images.css'

class Mypp extends React.Component{
    constructor(){
        super()
        this.state={
            isLoading:false,
            myimages: []
        }
    }

    componentDidMount(){
        this.setState({isLoading:true})
        let url='https://randomuser.me/api/?results=20'
       fetch(url)
       .then(response => response.json())
       .then(data => {
            this.setState({
                isLoading:false,
                myimages: data.results
            })
        })
      .then(error => console.log(JSON.stringify(error)))
    }

    renderImage(){
        let ul=document.getElementById('authors')
        let authors =this.state.myimages
        authors.map(author => {
                let li=document.createElement('li')
                let img=document.createElement('img')
                let span=document.createElement('span')
                img.src=author.picture.medium
                span.innerHTML = `${author.name.first} ${author.name.last}`
                li.appendChild(img)
                li.appendChild(span)
                ul.appendChild(li)

                return ''
        })
    }

    render(){
        let loadMsg=this.state.isLoading ? 'Loading...': 'Authors'
        return (
            <div>
                <h1>{loadMsg}</h1>
                <ul id='authors'>{this.renderImage()}</ul>
            </div>
        )
    }
}
ReactDOM.render(<Mypp />, document.getElementById('root'))