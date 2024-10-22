import React, { useState } from "react";
import NameChangeComp from "./NameChangeComp";

function CounterComp() {

    const [ticket, setticket] = useState(0)

    const handleadd = () => {
        setticket(ticket + 1)
    }

    const handlesub = () => {
        setticket(ticket - 1)
    }

    const handlereset = () => {
        setticket(0)
    }

    const handleoperation = (film) => {

        if (film == "Add") {
            setticket(ticket + 1);
        }
        if (film == "Minus") {
            setticket(ticket - 1);
        }
        if (film == "Reset") {
            setticket(0);
        }
    }

    return (
        <div>
            <h1>TicketBooking-{ticket}</h1>
            {/* <button onClick={handleadd}>Add</button>
            <button onClick={handlesub}>minus</button>
            <button onClick={handlereset}>reset</button> */}


            <button onClick={() => handleoperation("Add")}>Add</button>
            <button onClick={() => handleoperation("Minus")}>Sub</button>
            <button onClick={() => handleoperation("Reset")}>reset</button>


        </div>
    )
}

export default CounterComp;