import React, { Component } from "react";

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            category: "website",
            comment: ""

        }

    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleCategoryChange = (event) => {
        this.setState({category: event.target.value})
    }

    handleCommentChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <h2>Please Fill out the Form below</h2>
                <form onSubmit={this.handleSubmit}>

                    <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input 
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    id="id-name" name="name" 
                    type="text" />
                    <input type="submit" value="Submit" />
                    </div>

                    <div>
                    <label htmlFor="id-category">Query Category</label>
                        <select 
                        id="id-category" 
                        name="category"
                        value={this.state.category}
                        onChange={this.handleCategoryChange}>
                            <option value="website">Website Issue</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General Enquiry</option>
                            </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea
                            id="id-comments"
                            name="comments"
                            value={this.state.comment}
                            onChange={this.handleCommentChange}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                    </form>            
                </div>
        )
    }
}