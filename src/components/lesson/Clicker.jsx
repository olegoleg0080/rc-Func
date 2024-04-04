import { Component } from "react";

class Clicker extends Component {
    state = {
        value: 10,
        isClicked: false,
    };
    handlerClick = (val) => {

        this.setState((prevState) => ({ value: prevState.value + val }));
    };
    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button
                    type="button"
                    onClick={() => {
                        this.handlerClick(10);
                    }}
                >
                    +
                </button>
                <button
                    type="button"
                    onClick={() => {
                        this.handlerClick(20);
                    }}
                >
                    -
                </button>
            </div>
        );
    }
}
export default Clicker;
