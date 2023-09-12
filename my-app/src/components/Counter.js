import React from 'react';
import { createElement } from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue || 0
        };
    }

    decrement = () => {
        this.setState((prevState) => ({ value: prevState.value - 1 }));
    };

    increment = () => {
        this.setState((prevState) => ({ value: prevState.value + 1 }));
    };

    render() {
        return createElement(
            'h1',
            null,
            'React Counter ',
            createElement('span', null, this.state.value),
            createElement('div', null,
                createElement('button', { onClick: this.decrement }, '-'),
                createElement('button', { onClick: this.increment }, '+'),
            ),
        );
    }
}

export default Counter;
