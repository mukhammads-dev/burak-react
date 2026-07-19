// @ts-nocheck
import React from "react";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeDetail = () => {
        this.setState({
            color: "blue",
            brand: "Tesla",
            model: "Model S",
            year: 2023,

        });
    }
    // Lifesycle methods => Retrieve data from backend
    componentDidMount() {
        console.log("componentDidMount")
        // birinchi render bolganda ishga tushadi
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        // component yashirilishidan oldin ishga tushadi
    }

    componentDidUpdate() {

    }


    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    Color: {this.state.color} - Model:{this.state.model}
          from {this.state.year}.
        </p>
                <button
                    type="button"
                    onClick={this.changeDetail}>Change detail </button>
            </div>
        );
    }
}

export default Test