import React from "react";
import { multiply, sub } from "../../utilities/Calculate";
function Shoes() {
    const multi = multiply(50, 20);
    const Subtraction = sub(50, 10);
    return (
        <div className="Shoes">
            <h1>This is shoes component</h1>
            <p>multiply:{multi}</p>
            <p>Subtraction : {Subtraction}</p>



        </div>
    );

}


export default Shoes;