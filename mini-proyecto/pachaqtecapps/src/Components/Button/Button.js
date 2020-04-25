import React, { Component } from 'react';
import './Button.css';

// export const Button = () => {
// 	const [buttonText, setButtonText] = useState('haz click aquí');

// 	const handleClick = () => {
// 		return setButtonText('Gracias por hacer click');
// 	};
// 	return (
// 		<button className='primary-button' onClick={handleClick}>
// 			<p className='text-button'>{buttonText}</p>
// 		</button>
// 	);
// };
export default class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonText: '',
		};
	}
	componentDidMount() {
		this.setState({
			buttonText: 'Haz click aquí',
		});
	}

	handleClick = () => {
		this.setState({
			buttonText: 'Gracias por hacer click',
		});
	};

	render() {
		const { buttonText } = this.state;
		return (
			<button className='primary-button' onClick={this.handleClick}>
				<p className='text-button'>{buttonText}</p>
			</button>
		);
	}
}
