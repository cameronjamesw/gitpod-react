import React from "react";

const FunctionalGreetingWithProps = (props) => {
    return <h1>Hello there {props.name}, aged {props.age}, {props.greeting}</h1>
}

export default FunctionalGreetingWithProps;