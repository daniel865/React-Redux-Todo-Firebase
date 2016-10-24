import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {

	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', () => {
		
		it('should set valid todos array', () => {
			let todos = [
				{
					id: 23,
					text: 'Text all files',
					completed: false
				}
			];
			TodoAPI.setTodos(todos);

			let actualTodos = JSON.parse(localStorage.getItem('todos'));
			expect(actualTodos).toEqual(todos);
		});

		it('should not set invalid todos array', () => {
			let badTodos = {
				a: 'b'
			};
			TodoAPI.setTodos(badTodos);
			expect(localStorage.getItem('todos')).toBe(null);
		});

	})

	describe('getTodos', () => {

		it('should return empty array for bad localStorage data', () => {
			let actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it('should return todo if valid array in localStorage', () => {
			let todos = [
				{
					id: 23,
					text: 'Text all files',
					completed: false
				}
			];
			localStorage.setItem('todos', JSON.stringify(todos));
			let actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);
		});

	});

	describe('filterTodos', () => {

		let todos = [
			{
				id: 1,
				text: 'Some text here',
				completed: true
			},{
				id: 2,
				text: 'other text here',
				completed: false
			},{
				id: 3,
				text: 'Some text here',
				completed: true
			}
		];

		it('should return all items if showCompleted is true', () => {
			let filterTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filterTodos.length).toBe(3);
		});

		it('should return non-completed todos when showCompleted is false', () => {
			let filterTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filterTodos.length).toBe(1);
		});

		it('should sort by completed status', () => {
			let filterTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filterTodos[0].completed).toBe(false);
		});

		it('should filter todos by searchText', () => {
			let filterTodos = TodoAPI.filterTodos(todos, true, 'some');
			expect(filterTodos.length).toBe(2);
		});

		it('should return all todos if searchText is empty', () => {
			let filterTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filterTodos.length).toBe(3);
		});

	});

});