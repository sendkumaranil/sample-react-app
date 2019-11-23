import React from 'react'
import './Product.css'

function Product(prop){
    const currencyFunc=function(num){
        return (num).toLocaleString('en-US', { style: 'currency', currency: 'INR' });
    }
   
    return(
        <div className='card'>
            <ul>
                <h3>{prop.product.name}</h3>
                <li>Product Code:{prop.product.id}</li>
                <li>Price:{currencyFunc(prop.product.price)}</li>
                <li>Description:{prop.product.description}</li>
            </ul>
        </div>
    )
}

export default Product