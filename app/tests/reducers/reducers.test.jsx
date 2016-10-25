var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('../../reducers/reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: {
          id: '123abc',
          text: 'something to do',
          completed: false,
          createdAt: 92384275
        }
      };
      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.todo.text);
    })
    it('should update todo', () => {
      var todos = [
        {
          id: '123',
          text: 'Something',
          completed: true,
          createdAt: 123,
          completedAt: 125
        }
      ];
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'Anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

});
