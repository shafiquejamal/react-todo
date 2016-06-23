var expect = require('expect');
var df = require('deep-freeze-strict');

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

});
