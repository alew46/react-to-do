import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { description: "Walk the cat", isCompleted: true },
        { description: "Throw the dishes away", isCompleted: false },
        { description: "Buy new dishes", isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos: todos})

    if (todo.isCompleted === true) {
      console.log("This item is now complete")
    } else if (todo.isCompleted === false) {
      console.log("This item is now incomplete")
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) {
      return
    };

    const newTodo = { description: this.state.newTodoDescription, isCompleted: false }
    console.log(newTodo);
    this.setState( { todos: [...this.state.todos, newTodo], newTodoDescription: '' } )
  };

  setTodoValue(e) {
    this.setState( { newTodoDescription: e.target.value } )
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.setTodoValue(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
