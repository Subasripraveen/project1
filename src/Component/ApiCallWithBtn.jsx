import React, {useState } from "react";

function ApiCallWithBtn() {

    const [data, setdata] = useState([]);

    const handleapi = async () => {
        let res = await fetch("https://fakestoreapi.com/products");

        let apidata = await res.json();

        setdata(apidata);
    }

        return (
        <div>
            <button onClick={handleapi}>CallApi</button>

            {data.map((da) => (
                <div>

                    <h2>{da.title}</h2>
                    <img src={da.image} height={50} width={50} />
                    <h4>{da.price}</h4>

                </div>

            ))}

        </div>

    )
}
export default ApiCallWithBtn