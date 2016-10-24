import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import ConnectedTodoList, {TodoList} from '../../components/TodoList';
import ConnectedTodo, {TodoItem} from '../../components/TodoItem';
import {configure} from '../../store/configureStore';

describe('TodoList', () => {

	it('Should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for each todo item', () => {
		let todos = [{
			id: 1,
			text: 'Do something',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}, {
			id: 2,
			text: 'Check mail',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}];
		let store = configure({
			todos: todos
		});
		let provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList />
			</Provider>
		);
		let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

		expect(todosComponents.length).toBe(todos.length);
	});

	it('should render empty message if no todos', () => {
		let todos = [];
		let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		let $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});

});
