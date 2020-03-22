import React, { Component, RefObject, createRef } from 'react';
import { Form } from 'react-bootstrap';

import './auto-complete-input.scss';
import { Keys } from './keys';

interface Props {
	suggestions: string[];
	[x: string]: any;
}
interface State {
	activeSuggestion: number;
	filteredSuggestions: string[];
	showSuggestions: boolean;
	userInput: string;
}

const initState: State = {
	activeSuggestion: 0,
	filteredSuggestions: [],
	showSuggestions: false,
	userInput: ''
};

class AutoCompleteInput extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = initState;
	}

	// Fired when the input value changes
	onChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
		const { suggestions } = this.props;
		const userInput = e.currentTarget.value;

		// Filter suggestions that do not contain the user's input
		const filteredSuggestions = suggestions.filter(
			(suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
		);

		this.setState({
			activeSuggestion: 0,
			filteredSuggestions,
			showSuggestions: true,
			userInput: e.currentTarget.value
		});

		this.props.onChange(e);
	};

	// Event fired when the user clicks on a suggestion
	onClick = (e: React.MouseEvent<HTMLLIElement>) => {
		e.preventDefault();
		// Update the user input and reset the rest of the state
		this.setState({
			activeSuggestion: 0,
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: e.currentTarget.innerText
		});

		this.props.onChange(e);
	};

	// Event fired when the user presses a key down
	onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { activeSuggestion, filteredSuggestions } = this.state;

		// User presses the enter key, update the input and close suggestions
		if (e.keyCode === Keys.ENTER) {
			this.setState({
				activeSuggestion: 0,
				showSuggestions: false,
				userInput: filteredSuggestions[activeSuggestion]
			});

			this.props.onChange(e);

			// Prevent form submit
			e.preventDefault();
		}

		// User presses the up arrow, decrement the index
		else if (e.keyCode === Keys.ArrowUp) {
			if (activeSuggestion === 0) {
				return;
			}

			this.setState({ activeSuggestion: activeSuggestion - 1 });
		}

		// User pressed the down arrow, increment the index
		else if (e.keyCode === Keys.ArrowDown) {
			if (activeSuggestion - 1 === filteredSuggestions.length) {
				return;
			}

			this.setState({ activeSuggestion: activeSuggestion + 1 });
		}
	};

	render() {
		const { activeSuggestion, filteredSuggestions, showSuggestions, userInput } = this.state;
		const { suggestions, children, onChange, value, ...rest } = this.props;

		let suggestionsListComponent;

		if (showSuggestions && userInput) {
			if (filteredSuggestions.length) {
				suggestionsListComponent = (
					<ul className="auto-complete-input--suggestions">
						{filteredSuggestions.map((suggestion, index) => {
							let className;

							// Flag the active suggestion with a class
							if (index === activeSuggestion) {
								className = 'active';
							}

							return (
								<li key={suggestion} className={className} onClick={this.onClick}>
									{suggestion}
								</li>
							);
						})}
					</ul>
				);
			} else {
				suggestionsListComponent = (
					<div className="auto-complete-input--no-suggestions">
						<em>Keine Vorschläge verfügbar. Bitte geben Sie etwas ein.</em>
					</div>
				);
			}
		}

		return (
			<React.Fragment>
				<Form.Control
					className="auto-complete-input"
					type="text"
					onChange={this.onChangeValue}
					onKeyDown={this.onKeyDown}
					value={userInput}
					{...rest}
				/>
				{suggestionsListComponent}
			</React.Fragment>
		);
	}
}

export default AutoCompleteInput;
