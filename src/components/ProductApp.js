import React from 'react'
import Product from './Product'
import prdData from './productData'
import './ProductApp.css'

function ProductApp(){
    const allproducts=prdData.map(pdata => <Product key={pdata.id} product={pdata}/>);
    return(
        <div className='row'>
            <div className='column'>
                {allproducts}
            </div>
        </div>
    )
}

export default ProductApp