import React from 'react'



class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            introduction: "Welcome to the site!",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick() {
    this.setState({
        introduction: this.state.introduction === "Welcome to the site!" ? "Goodbye, thanks for visiting today!!" : "Welcome to the site!",
        buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit"
    },
    () => {
        console.log("This is the updated state", this.state.introduction)
        console.log("This is the updated state", this.state.buttonText)
    })
    console.log(this.state.introduction);
    }

    incrementState() {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()} > {this.state.buttonText}</button>
                <button onClick={() => this.incrementState()}>Increment</button>
                <p>You have clicked this button {this.state.count} times!</p>
            </div>
        )
    }
};

export default StatefulGreeting;