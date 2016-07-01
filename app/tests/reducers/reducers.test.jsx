var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {

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
        text: 'walk the dog'
      };
      var response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0].text).toEqual(action.text);
    });

    it('should toggle completed and set completedAt', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 2
      }

      var todos = [
        {
          id: 1,
          text: 'one',
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
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

      var action2 = {
        type: 'TOGGLE_TODO',
        id: 3
      }

      var response = reducers.todosReducer(df(todos), df(action));

      expect(response[1].completed).toBe(true);
      expect(response[1].completedAt).toExist();

      var response2 = reducers.todosReducer(df(todos), df(action2));

      expect(response2[2].completed).toBe(false);
      expect(response2[2].completedAt).toNotExist();

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
  });


});
