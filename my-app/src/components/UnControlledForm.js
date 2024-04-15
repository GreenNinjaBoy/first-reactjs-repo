import React, { Component } from "react";

export class UnControlledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComments.current.value)
    }


    render() {
        return (
            <div>
                <h2>Please Fill out the Form below</h2>
                <form onSubmit={this.handleSubmit}>

                    <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input 
                    id="id-name" name="name" 
                    type="text"
                    ref={this.inputName} />
                    </div>

                    <div>
                    <label htmlFor="id-category">Query Category</label>
                        <select 
                        id="id-category" 
                        name="category"
                        ref={this.inputCategory}>
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
                            ref={this.inputComments}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                    </form>            
                </div>
        )
    }
}