import React from "react";



class additionBox extends React.Component {

    increment() {
        this.setState({ value: this.state.value + 1 });
    }
    
    decrement() {
        this.setState({ value: this.state.value - 1 });
    }
    
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
     render() {
        return (
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.state.value}</span>
            <button onClick={this.increment}>+</button>
          </div>
        );
    }
}
export default additionBox;