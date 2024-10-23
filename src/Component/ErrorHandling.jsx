import React, { useState } from "react";

function ErrorHandling() {

    const [count, setcount] = useState(0)
    const handleclick = () => {

        try {
            // setcount(counts + 1)error statement
            setcount(count + 1)
        } catch (error) {
            console.log("error in try block")
        }
        finally {
            console.log("Error cleared");
        }

    }
    return (
        <div>
            <h2>ErrorHandling</h2>

            <button onClick={handleclick}>handleclick</button>

        </div>
    )
}
export default ErrorHandling