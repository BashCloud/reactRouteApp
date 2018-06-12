import React from "react";
import { createStore } from "redux";

const counter = (state = 0, action) => {  //Reducer Function
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

class Counterr extends React.Component {  // Component
    constructor(props) {
       super(props) 
        this.state = {
            value: 0
        }
    }
    // store.subscribe()
    render() {
        return (
            <div>
                {/* <h1>{this.getState.value}</h1> */}
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        )
    }
}


    const store = createStore(counter);

    const renderr = () => {
        console.log(store.getState())
    }

    store.subscribe(renderr);
    renderr();

export default class Counter extends React.Component {
    render() {
        return (
            <Counterr store={store}
                // value={this.state.value}
                onIncrement={() =>
                    store.dispatch({
                        type: 'INCREMENT'
                    })
                }
                onDecrement={() =>
                    store.dispatch({
                        type: 'DECREMENT'
                    })
                }
            />
        )
    }
}