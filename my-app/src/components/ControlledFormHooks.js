import React, { useState } from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }
    return (
        <div>
            <h1>Issue Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your name: </label>
                    <input id="id-name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        name="name"
                        type="text" />
                </div>
                <div>
                    <label htmlFor="id-category">Query Category: </label>
                    <select id="id-category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="website">Website Issue</option>
                        <option value="order">Order Issue</option>
                        <option value="general">General Enquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments: </label>
                    <textarea id="id-comments"
                        onChange={(e) => setComments(e.target.value)}
                        value={comments}
                        name="comments" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledFormHooks