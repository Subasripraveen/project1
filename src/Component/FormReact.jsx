import React, { useState } from "react";

function FormReact() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [age, setage] = useState("");

    const handlename = (e) => {
        setname(e.target.value);
    };
    const handleemail = (e) => {
        setemail(e.target.value);
    };
    const handleage = (e) => {
        setage(e.target.value);
    };

    return (
        <div>
            <label>Enter your name</label>:
            <input onChange={handlename} placeholder="name"/>
            <br></br>
            <br></br>

            <label>Enter your email</label>:
            <input onChange={handleemail} placeholder="email"/>
            <br></br>
            <br></br>

            <label>Enter your age</label>:
            <input onChange={handleage} placeholder="age"/>
            <br></br>
            <br></br>

            <button>submit</button>

            <div>
                <h2>My name is {name}</h2>
                <h2>My email is {email}</h2>
                <h2>My age is {age}</h2>


            </div>
        </div>
    );
}
export default FormReact

