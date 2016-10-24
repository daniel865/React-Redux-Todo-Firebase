import React, { Component } from 'react';
var {connect} = require('react-redux');

import moment from 'moment';

var actions = require('../actions/actions');

export class TodoItem extends Component {

	constructor(props){
		super(props);

	}

	render() {
		let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
		let todoClassName = completed ? 'todo todo-completed' : 'todo';

		let renderDate = () => {
			let message = 'Created ';
			let timestamp = createdAt;

			if (completed){
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		};

		return (
			<div className={todoClassName} onClick={() => {
				dispatch(actions.toggleTodo(id));
			}}>
				<div>
					<input type="checkbox" checked={completed} />
				</div>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		);
	}
}

export default connect()(TodoItem);
