import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import {TodoItem} from '../../components/TodoItem';
import * as actions from '../../actions/actions';

describe('TodoItem', () => {

	it('Should exist', () => {
		expect(TodoItem).toExist();
	});

	it('should dispatch TOGGLE_TODO action on click', () => {
		var todoData = {
			id: 199,
			text: 'Write todo test',
			completed: true
		};
		let action = actions.startToggleTodo(todoData.id, !todoData.completed);

		var spy = expect.createSpy();
		var todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} dispatch={spy} />);
		let $el = $(ReactDOM.findDOMNode(todoItem));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(action);

	})

});
