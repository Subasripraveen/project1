import React, { useEffect, useState } from "react";


function LifeCycleFunComp() {

    const [count, setcount] = useState(0);

    useEffect(() => {

        console.log("LifeCycle");

        return () => { 
            console.log("unmounting clear");
        };         

    }, [count]);

    const handleadd = () => {
        setcount(count + 1);
    };

    return (

        <div>
            <h1>lifetime-{count}</h1>
            <button onClick={handleadd}>click</button>
        </div>
    )

}
export default LifeCycleFunComp

// useeffect kula pota mounting, useeffect la depedency array la pota updating, useeffect la return function kula pota unmounting