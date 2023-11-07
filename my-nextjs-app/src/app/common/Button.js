import React from "react";

const Button = (props) => {
    return (
        <button onClick={props.onClick}
                className={props.className}
                data-testid={props.dataTestid}
        >
            {props.title}
        </button>
    )
}

export default Button;