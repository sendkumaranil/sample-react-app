import React from 'react'
import './ContactCard.css'

function ContactCard2(props){
    console.log(props)
    return(
        <div className='card'>
            <img alt={props.contact.name} src={props.contact.imgUrl} style={{width:'100%'}} />
            <div className='container'>
                <h4>{props.contact.name}</h4>
                <p>Designation: {props.contact.desig}</p>
                <p>Email: {props.contact.email}</p>
                <p>Mobile: {props.contact.mobile}</p>
            </div>
        </div>
    )
}

export default ContactCard2