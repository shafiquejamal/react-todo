var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {

  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch addTodo when valid todo text', () => {
    var todoText = 'Check mail';
    var spy = expect.createSpy();
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dipatch addTodo when invalid todo text', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    var emptyNewTodo = '';

    addTodo.refs.todoText.value = emptyNewTodo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
