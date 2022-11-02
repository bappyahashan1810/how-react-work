import React from "react";
import Cosmatic from "../../Cosmatic/Cosmatic";


function Cosmatics() {
    const cosmatics = [
        { id: 1, name: 'Alta', price: 100 },
        { id: 2, name: 'balis', price: 200 },
        { id: 3, name: 'Calis', price: 300 },
        { id: 4, name: 'Dalis', price: 400 },
        { id: 5, name: 'Ealis', price: 500 }
    ]

    return (

        <div className="Cosmatics">
            <h1>Here is Cosmatics page</h1>
            {
                cosmatics.map(cosmatic => <Cosmatic
                    key={cosmatic.id}
                    cosmatic={cosmatic}>

                </Cosmatic>)
            }



        </div>
    );
}

function FacePowder(props) {
    return (
        <div>
            <h1>Name:</h1>
        </div>
    )
}

export { Cosmatics, FacePowder };
