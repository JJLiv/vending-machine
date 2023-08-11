import React, { useState, useEffect } from "react";

const Snack = ({ kind, price, brand, img }) => {
    const [qty, setQty] = useState(10);

    return (
        <div>
            <h1>{kind}</h1>
            <img src={img} alt=""/>
            <>
                <h3>{brand}</h3>
                <h3>{price}</h3>
                <h2>{qty}</h2>
            </>
        </div>
    )
}

export default Snack;