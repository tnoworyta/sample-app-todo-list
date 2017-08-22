import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addTodo, removeTodo } from './store'

export class TodoAdd extends Component {
  state = {
  }
  updateValue = ({ target: { value } }) => this.setState({ value });
  addTodo = () =>  {
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.updateValue}/>
        <button onClick={this.addTodo}></button>
      </div>
    );
  }
}

export class TodoList extends Component {
  removeTodo = (todo) => () => this.props.removeTodo(todo);

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => <li key={todo.id}>{todo.text} <button onClick={this.removeTodo(todo)}></button></li>)}
      </ul>
    );
  }
}

class App extends Component {


  addTodo = (text) => this.props.addTodo(text);

  removeTodo = (todo) => this.props.removeTodo(todo);

  render() {
    const { todos } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <TodoAdd addTodo={this.addTodo}/>
          <TodoList todos={todos} removeTodo={this.removeTodo}/>
          <div>Count: {todos.length}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTodo,
  removeTodo,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
