import React from 'react'
import './ContactCard.css'

function ContactCard(){
    return(
        <div>
            <div className='card'>
                <img alt='Anil' src={require('./image1.png')} style={{width:'100%'}} />
                <div className='container'>
                    <h4>Anil Kumar</h4>
                    <p>Designation: System Enginner and Lead</p>
                    <p>Email: anil.verma4283@gmail.com</p>
                    <p>Mobile: +918860543130</p>
                </div>
            </div>
            <div className='card'>
                <img alt='Priya' src={require('./image2.png')} style={{width:'100%'}} />
                <div className='container'>
                    <h4>Priya Dutta</h4>
                    <p>Designation: System Engineer</p>
                    <p>Email: priya.dutta@gmail.com</p>
                    <p>Mobile: +91886345532</p>
                </div>
            </div>
            <div className='card'>
                <img alt='Payal' src={require('./image3.jpg')} style={{width:'100%'}} />
                <div className='container'>
                    <h4>Payal Sharma</h4>
                    <p>Designation: System Architecht</p>
                    <p>Email: manish.sharma@gmail.com</p>
                    <p>Mobile: +9186743213332</p>
                </div>
            </div>
            <div className='card'>
                <img alt='Kundan' src={require('./image4.jpg')} style={{width:'100%'}} />
                <div className='container'>
                    <h4>Kundan Verma</h4>
                    <p>Designation: System Technical Advisor</p>
                    <p>Email: kundan.verma@gmail.com</p>
                    <p>Mobile: +91993456321</p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard