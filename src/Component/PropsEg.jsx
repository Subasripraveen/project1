import React, { useState } from "react";

function PropsEg(props) {

    return (
        <>
            <h1>PropsEg</h1>
            <h2>my name is {props.a} and my age is {props.b}</h2>
            <p>for props.a and props.b refer app.jsx for explanation.i.e setname and setage</p>
        </>


    )

}
export default PropsEg

// function PropsEg({ a, b }) {

//     return (
//         <div>
//             <h2>my name is {a} and my age is {b}</h2>

//         </div>

//     )
// }