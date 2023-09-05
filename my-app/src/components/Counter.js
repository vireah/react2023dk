import React from 'react';

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
        return (
            <div>
                <h1>React Counter</h1>
                <span >{this.state.value}</span>
                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;
