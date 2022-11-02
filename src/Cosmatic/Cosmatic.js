import React from 'react'
import './cosmatic.css'

const Cosmatic = (props) => {
    const { name, price, _id } = props.cosmatic;
    const addToCart = (name) => {
        console.log('item added', name);

    }
    return (
        <div className='product'>
            <h1>Buy This: {name}</h1>
            <p>Only For: {price}</p>
            <p>It has Id : {_id}</p>
            <button onClick={() => addToCart(name)} >Buy Now</button>

        </div>
    )
}

export default Cosmatic;