var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('authReducer', () => {

    it('should store uid on login', () => {
      const action = {
        type: 'LOGIN',
        uid: 'someuid'
      };
      const response = reducers.authReducer(undefined, df(action));

      expect(response).toEqual({uid: action.uid})
    });

    it('should remove the uid on logout', () => {
      const action = {
        type: 'LOGOUT'
      };
      const authData = {
        uid: 'someuid'
      }
      const response = reducers.authReducer(df(authData), df(action));

      expect(response).toEqual({});
    });

  });

  describe('searchTextReducer', () => {

    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var response = reducers.searchTextReducer(df(''), df(action));

      expect(response).toEqual(action.searchText);
    });
  });

  describe('searchTextReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var response = reducers.showCompletedReducer(df(false), df(action));

      expect(response).toBe(true);

      var response2 = reducers.showCompletedReducer(df(true), df(action));
      expect(response2).toBe(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 92384275
        }
      };
      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var updates = {
        completed: false,
        completedAt: null
      }
      var todos = [
        {
          id: 1,
          text: 'one',
          completed: true,
          createdAt: 123,
          completedAt: 125
        }, {
          id: 2,
          text: 'two',
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }, {
          id: 3,
          text: 'three',
          completed: true,
          createdAt: moment().unix(),
          completedAt: moment().unix()
        }
      ];
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      }

      var updates2 = {
        completed: false,
        completedAt: moment().unix()
      }
      var action2 = {
        type: 'UPDATE_TODO',
        id: todos[1].id,
        updates2
      }

      var response = reducers.todosReducer(df(todos), df(action));

      expect(response[0].completed).toEqual(updates.completed);
      expect(response[0].completedAt).toEqual(updates.completedAt);
      expect(response[0].text).toEqual(todos[0].text);

      var response2 = reducers.todosReducer(df(todos), df(action2));

      expect(response2[1].completed).toBe(updates2.completed);
      expect(response2[1].completedAt).toNotExist();
      expect(response2[1].text).toEqual(todos[1].text);

    });

    it('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3300
        }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(todos[0]);
    });

    it('should clear todos from the state after logout', () => {
      const action = {
        type: 'LOGOUT'
      };

      const todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3300
        }];

      var response = reducers.todosReducer(df(todos), df(action));
      expect(response.length).toEqual(0);  

    });
  });


});
