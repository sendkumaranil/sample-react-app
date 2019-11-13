import React from 'react'
import './ContactCard.css'

function ContactCard(props){
    return(
        <div className='card'>
            <img alt={props.name} src={props.imgUrl} style={{width:'100%'}} />
            <div className='container'>
                <h4>{props.name}</h4>
                <p>Designation: {props.desig}</p>
                <p>Email: {props.email}</p>
                <p>Mobile: {props.mobile}</p>
            </div>
        </div>
    )
}

export default ContactCard