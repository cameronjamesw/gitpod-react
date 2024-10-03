import React from 'react'

class StatefulGreeting extends React.Component {
    render() {
        return <h1>{this.props.greeting} Welcome back {this.props.name}, it's time to learn some more React!!</h1>
    }
};

export default StatefulGreeting;