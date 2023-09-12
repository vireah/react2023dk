import React from "react";

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.className}>
            {props.title}
        </button>
    )
}

export default Button;