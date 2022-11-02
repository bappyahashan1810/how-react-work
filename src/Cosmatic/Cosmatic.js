import React from 'react'

const Cosmatic = (props) => {
    const { name, price, _id } = props.cosmatic;
    return (
        <div>
            <h1>Buy This: {name}</h1>
            <p>Only For: {price}</p>
            <p>It has Id : {_id}</p>

        </div>
    )
}

export default Cosmatic;