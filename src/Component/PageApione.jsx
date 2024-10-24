import React from "react";
import useApicall from "./useApicall";

function PageApione() {

    const data = useApicall("https://jsonplaceholder.typicode.com/todos")

    console.log(data);
    return (
        <div>
            <h2>PageApione</h2>
            {data.map((da) => (
                <div>
                    <h5>{da.title}</h5>
                </div>

            ))}
        </div>
    )
}
export default PageApione