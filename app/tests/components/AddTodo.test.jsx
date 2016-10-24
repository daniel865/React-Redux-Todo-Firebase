import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import * as actions from '../../actions/actions';
import {AddTodo} from '../../components/AddTodo';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should dispatch ADD_TODO when valid todo test', () => {
		let todoText = 'Check mail';
		let action = actions.startAddTodo(todoText);
		let spy = expect.createSpy();
		let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
		let $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = 'Buy Milk';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should not dispatch ADD_TODO when invalid todo text', () => {
		let spy = expect.createSpy();
		let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
		let $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});

});
