import React from 'react'



class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            introduction: "Welcome to the site!",
            buttonText: "Exit"
        };
    }

    handleClick() {
    this.setState({
        introduction: "Goodbye, thanks for visiting today!!",
        buttonText: "Enter"
    },
    () => {
        console.log("This is the updated state", this.state.introduction)
        console.log("This is the updated state", this.state.buttonText)
    })
    console.log(this.state.introduction)
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
};

export default StatefulGreeting;