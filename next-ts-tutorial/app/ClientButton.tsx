"use client";
import React, {useState} from "react";

const ClientButton = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={(e) => setCount(count + 1)}>Click
            Me! {count}</button>
    )
}

export default ClientButton;
