import React, { Component } from 'react';
import './Disclaimer.css';

class Disclaimer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='disclaimer-container'>
				<p className='disclaimer-text'>{this.props.text}</p>
			</div>
		);
	}
}

export default Disclaimer;
