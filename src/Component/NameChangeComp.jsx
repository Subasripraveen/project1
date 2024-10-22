import React, { useState } from "react";

function NameChangeComp() {

    const [name, setname] = useState("Kawin")

    const handlename = () => {
        setname("dhakshan");
        if (name == "kawin") {
            setname("dhakshan")
        }
        if (name == "dhakshan") {
            setname("kawin")
        }

    }
    return (
        <>
            <h1>{name}</h1>
            <button onClick={handlename}>change</button>

        </>

    )
}
export default NameChangeComp
