import React from "react";
import useApicall from "./useApicall";

function PageApitwo() {

    const data = useApicall("https://fakestoreapi.com/products")
    console.log(data, "suba")
    return (

        <div>
            <h2>PageApitwo</h2>
            {data.map((da) => (
                <div>
                    <h5>{da.title}</h5>
                </div>


            ))}
        </div>
    )
}
export default PageApitwo