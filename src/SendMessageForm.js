import React, { Component } from 'react';

class Title extends Component {
	
	constructor() {
		super()
		this.state= {
			message: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	function handleChange(e) {
	    this.setState({
		    message: e.target.value
	    })
    }

    function handleSubmit(e) {
		e.preventDefault()
		this.props.sendMessage(this.state.message)
		this.setState({
			message: ''
		})
    }

	render() {
        return (
        	<form 
        		onSubmit={this.handleSubmit}
        		className="send-message-form">
	            <input
					onChange={this.handleChange}
					value={this.state.message}
					placeholder="Type your message and hit ENTER"
					type="text" 
				/>
			</form>
        );
    }
}

export default Title;