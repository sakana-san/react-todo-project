import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render () {
    const todo = this.props.todo;
    return(
      <li className="p-panel__item">
        <button className="c-button--toggle" type="button" onClick={this.props.onToggle}>toggleボタンです</button>
        <button className="c-button--close" type="button" onClick={this.props.onDelete}></button>
        <span className={todo.done ? 'is-line-through' : ''}>
          { todo.text }
        </span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      text: '',
      todos: []
    });


    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);


  }
  addTodo(todo) {
    const prevTodos = this.state.todos;

    this.setState({
      todos: [
        ...prevTodos,
        todo
      ]
    });
  }

  toggleTodo(index) {
    const prevTodos = this.state.todos;

    this.setState({
      todos: prevTodos.map((todo, i) => {
        if (index != i) {
          return todo;
        } else {
          return {
            text: todo.text,
            done: !todo.done
          };
        }
      })
    });
  }

  deleteTodo(index) {
    const prevTodos = this.state.todos;

    this.setState({
      todos: prevTodos.filter((todo, i) => i != index)
    });
  }

  render () {
    const todos = this.state.todos;

    return (
      <div className="p-panel__task">
        <h3 className="p-panel__heading">Toggle</h3>
        <ul className="p-panel__list">
          {todos.map((todo, i) => {
            return (
              <TodoItem
                key={i}
                todo={todo}
                onToggle={ () => {
                  this.toggleTodo(i);
                }}
                onDelete={ ()  => {
                  this.deleteTodo(i);
                }}
              />
            );
          })}
        </ul>

        <input
          type="text"
          value={ this.state.text}
          onChange={ e => {
            this.setState ({
              text: e.target.value
            });
          }}
        />

        <button
          className="c-button"
          onClick={ () => {
            this.addTodo({
              text: this.state.text,
              done: false
            });

            this.setState({
              text: ''
            });
          }}
        >ボタンをクリックしてください</button>
      </div>
    );
  }
}