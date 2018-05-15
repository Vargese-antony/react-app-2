import React, { Component } from 'react';

export default class Form extends Component {
	handleSubmit = () => {
		
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="GitHub username" required />
				<button type="submit">Add Card</button>
			</form>
		);
	};
}
