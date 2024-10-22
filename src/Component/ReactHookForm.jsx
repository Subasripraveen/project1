import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {

    const { register, handleSubmit, formState: { errors }} = useForm()


    const handleform = (data) => (
        console.log(data)

    )
    console.log(errors)
    return (
        <div>

            <h1>HookForm</h1>

            <label>Enter your name: </label>
            <input {...register("firstname", { required: "firstname is required" })} placeholder="name" />
            <p>{errors?.firstname?.message}</p>

            <br></br>
            <br></br>
            <label>Enter your email: </label>
            <input {...register("email")} placeholder="email" />
            <br></br>
            <br></br>
            <button onClick={handleSubmit(handleform)}>submit</button>


        </div>

    )
}
export default ReactHookForm;