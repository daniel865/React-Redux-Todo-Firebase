import React, { Component } from 'react';
var {connect} = require('react-redux');

var actions = require('../actions/actions');

export class TodoSearch extends Component {

	constructor(props){
		super(props);
	}



	render() {
		var {dispatch, showCompleted, searchText} = this.props;
		return (
			<div className="container__header">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
							var searchText = this.refs.searchText.value;
							dispatch(actions.setSearchText(searchText));
						}} />
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
								dispatch(action.toggleShowCompleted());
							}} />
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		showCompleted: state.showCompleted,
		searchText: state.searchText
	}
})(TodoSearch);