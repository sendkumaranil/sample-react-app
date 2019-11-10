import React from 'react'
import ContactInfo from './ContactInfo';

function OrderInfo(){
    return (
        <div>
            <h3>Order Details:</h3>
            <ol>
                <li>Item-1:
                <ul>
                    <li>T-Shirt</li>
                    <li>Size-M</li>
                    <li>Price: 565.00 Rs</li>
                </ul>
                </li>
                <li>Item-2:
                    <ul>
                        <li>Flying Machine Jeans</li>
                        <li>Size: 30</li>
                        <li>Price:1897.00 Rs</li>
                    </ul>
                </li>
            </ol>
            <table>
                <tr><td>Total Amount:</td><td>2462.00 Rs</td></tr>
                <tr><td>GST:</td><td>120.00 Rs</td></tr>
                <tr><td>Delivery charge:</td><td>50.00 Rs</td></tr>
                <tr><td></td><td>------------</td></tr>
                <tr><td>Order Total:</td><td>2632.00 Rs</td></tr>
            </table>
            <h3>Shiping Address:</h3>
            <ContactInfo />
        </div>
    )
}

export default OrderInfo