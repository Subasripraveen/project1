import axios from "axios";
import React, { useEffect, useState } from "react";

function useApicall(url) {

    const [data, setdata] = useState([])

    const handlefetch = async () => {
        let res = await axios.get(url)
        setdata(res.data)
    }

    useEffect(() => {
        handlefetch()

    },[])

    return data
}
export default useApicall