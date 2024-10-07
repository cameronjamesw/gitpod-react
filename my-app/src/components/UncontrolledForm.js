import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.categoryName = React.createRef();
        this.commentText = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.categoryName.current.value)
        console.log(this.commentText.current.value)
    }

    render() {
        return (
            <div>
                <h1>Issue Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your name: </label>
                        <input id="id-name"
                            name="name"
                            type="text"
                            ref={this.inputName} />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query Category: </label>
                        <select id="id-category" 
                                name="category"
                                ref={this.categoryName}>
                            <option value="website">Website Issue</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General Enquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments: </label>
                        <textarea id="id-comments"
                                  name="comments"
                                  ref={this.commentText}/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm