import { useState } from "react"

export default function Accordion(){

    const [isShowing, setIsShowing] = useState(false);

    return <div>
        <span data-testid="accordion--text">{isShowing ? "Me estoy mostrando" : ""}</span>
        <button data-testid="accordion--click" onClick={() => setIsShowing(!isShowing)}>Show / hide</button>
    </div>
}