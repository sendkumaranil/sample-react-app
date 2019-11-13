import React from 'react'
import ContactCard from './ContactCard'

function ContactApp(){
    return (
        <div>
            <ContactCard name='Anil Kumar' imgUrl={require('./image1.png')} 
                desig='System Engineer and Lead' email='anil.verma4283@gmail.com' mobile='+918860543130' />
            <ContactCard name='Priya Dutta' imgUrl={require('./image2.png')} 
                desig='System Engineer' email='priya.dutta@gmail.com' mobile='+91 87777776765'/>
            <ContactCard name='Payal Sharma' imgUrl={require('./image3.jpg')} 
                desig='System Architect' email='payal.sharma@gmail.com' mobile='+917655432223'/>
            <ContactCard name='Kundan Verma' imgUrl={require('./image4.jpg')} 
                desig='Database Admin' email='kundan.verma@gmail.com' mobile='+9165432134554'/>
        </div>
    )
}

export default ContactApp