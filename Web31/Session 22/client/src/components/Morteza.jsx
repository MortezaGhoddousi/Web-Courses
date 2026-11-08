import { useState } from "react";

export default function Morteza() {
    const [firstname, setFirstname] = useState("Morteza");
    const [lastname, setLastname] = useState("Ghoddousi");

    return (
        <h1>
            {firstname} {lastname}
        </h1>
    );
}
