var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Finish homework'
        },
        {
          id: 4,
          text: 'Load and start the dishwasher'
        },
        {
          id: 5,
          text: 'Finish report'
        }
      ]
    }
  },
  handleAddToto: function (text) {
    alert('new todo: ' + text);
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddToto}/>
      </div>
    )
  }
});

module.exports = TodoApp;
