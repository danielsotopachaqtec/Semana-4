import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title/Title';
import { Button } from './Components/Button/Button';
import Disclaimer from './Components/Disclaimer/Disclaimer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: false,
			text: '',
			submitted: false,
		};
	}

	onChangeText = (e) => {
		this.setState({
			text: e.target.value,
		});
	};
	onSubmitMessage = (e) => {
		e.preventDefault();
		if (this.state.text.length === 0) {
			console.log('this.state.text', this.state.text);
			console.log('e.target.value', e.target.value);
			return;
		} else {
			this.setState({
				text: this.state.text,
				display: true,
				submitted: !this.state.submitted,
			});
		}
	};
	render() {
		const { display, text, submitted } = this.state;
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<Title title={'Hola, bienvenido al mundo de React'} />
					{display ? <Disclaimer text={text} /> : null}
					{!submitted ? (
						<form
							className='form-container'
							onSubmit={this.onSubmitMessage}
						>
							<label className='label-form' htmlFor='new-message'>
								Escribe un mensaje para tus compañeros
							</label>
							<input
								className='input-form'
								id='new-message'
								onChange={this.onChangeText}
								value={this.state.text}
							/>
							<Button textButton={'Haz click al botón'} />
						</form>
					) : null}
				</header>
			</div>
		);
	}
}

export default App;
