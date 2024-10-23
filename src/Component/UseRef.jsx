import React, { useEffect, useRef } from "react";

function UseRef() {

    const inputref = useRef(null)

    useEffect(() => {
        inputref.current.focus()
    }, [])

    return (
        <div>   
            <h2>UseRef</h2>

            <input ref={inputref} placeholder="enter your name" />
        </div>
    )
}
export default UseRef