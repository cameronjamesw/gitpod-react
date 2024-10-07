import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            category: "website",
            comments: "",
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState ({
            comments: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Issue Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your name: </label>
                        <input id="id-name"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                            name="name"
                            type="text" />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query Category: </label>
                        <select id="id-category" 
                                name="category"
                                value={this.state.category}
                                onChange={this.handleCategoryChange}>
                            <option value="website">Website Issue</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General Enquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments: </label>
                        <textarea id="id-comments"
                                  onChange={this.handleCommentsChange}
                                  value={this.state.comments}
                                  name="comments"/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm