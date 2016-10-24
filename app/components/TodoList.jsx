import React from 'react';
import ReactDOM from 'react-dom';
var {connect} = require('react-redux');

import TodoItem from 'TodoItem';
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {

  constructor(props){
  	super(props);
  }

  render(){
  	let {todos, showCompleted, searchText} = this.props;
  	let renderTodos = () => {
      if (todos.length === 0){
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

  		return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
  			return (
  				<TodoItem key={todo.id} {...todo} />
  			);
  		});
  	};

    return (
    	<div>
    		{renderTodos()}
    	</div>
    );
  }
}

export default connect(
    (state) => {
      return state;
    }
)(TodoList);
