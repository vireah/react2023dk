import React from "react";

const Input = props => {
    return (
        <div>
            <label>
                <input
                    type={props.type}
                    id = {props.id}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    data-testid={props.dataTestid}
                />
            </label>
        </div>
    );
};

export default Input;