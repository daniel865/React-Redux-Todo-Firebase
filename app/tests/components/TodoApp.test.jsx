import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

var configureStore = require('../../store/configureStore');
import TodoApp from '../../components/TodoApp';
import TodoList from '../../components/TodoList';
import AddTodo from 'AddTodo';

describe('TodoApp', () => {

	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should render Todolist', () => {
		var store = configureStore.configure();
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<TodoApp />
			</Provider>
		);

		var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
		var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

		expect(todoList.length).toEqual(1);
	});

});
