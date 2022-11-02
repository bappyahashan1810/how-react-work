import React, { useEffect, useState } from "react";
import Cosmatic from "../../Cosmatic/Cosmatic";


function Cosmatics() {
    const [cosmatics, setCosmatics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmatics(data))
    }, [])


    return (

        <div className="Cosmatics">
            <h1>Here is Cosmatics page</h1>
            {
                cosmatics.map(cosmatic => <Cosmatic
                    key={cosmatic._id}
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
