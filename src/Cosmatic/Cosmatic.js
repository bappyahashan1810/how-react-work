import React from 'react'
import { addToDb } from '../utilities/fakedb';
import './cosmatic.css'

const Cosmatic = (props) => {
    const { name, price, _id } = props.cosmatic;
    const addToCart = (name) => {
        addToDb(name);

    }
    return (
        <div className='product'>
            <h1>Buy This: {name}</h1>
            <p>Only For: {price}</p>
            <p>It has Id : {_id}</p>
            <button onClick={() => addToCart(name)} >Buy Now</button>
            <button onClick={() => addToCart(name)}>Purches</button>

        </div>
    )
}

export default Cosmatic;