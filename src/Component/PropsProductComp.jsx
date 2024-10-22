import React from "react";

function PropsProductComp({da}){

    return(

        <>
        
        <h2>{da.title}</h2>
        <h2>{da.price}</h2>
        <img height={50} width={50} src={da.image}/>

        <p>propsproduct comp also explained in app jsx.using map function</p>
        
        </>
    )
}
export default PropsProductComp