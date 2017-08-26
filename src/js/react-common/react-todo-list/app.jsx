import React from 'react';

class TodoItem extends React.Component {
  render () {
    const todo = this.props.todo;
    return (
      <li className="p-result__item">
        <span onClick={this.props.onToggle}>{todo.text}</span>
        <button
          className=" c-button"
          onClick={this.props.onSetStorage}
        >保存
        </button>
        <button
          className={`c-button--delete ${todo.done ? '' : 'is-disabled'}`}
          onClick={this.props.onDelete}>削除
        </button>
      </li>

    );
  }
}

class StorageItem extends React.Component {
  render () {
    return (
      <li className="p-result__item is-storage"></li>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: '',
      todos: [
      ],
      storageTodos: [
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setStorageTodo = this.setStorageTodo.bind(this);
    this.getStorageTodo = this.getStorageTodo.bind(this);
  }

  addTodo(todo) {
    const prevTodos = this.state.todos;
    this.setState({
      id: todo.id,
      isActive: todo.text != '' ? true : false,
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
            id: todo.id,
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
      todos: prevTodos.filter((todo, i) => index != i),
      isActive: prevTodos.length !== 1 ? true : false
    });
  }
  setStorageTodo(todo) {
    const prevStorageTodos = this.state.storageTodos;
    console.log('prevStorageTodos', todo);
    this.setState({
      storageTodos: [
        ...prevStorageTodos,
        todo
      ]
    })
    let set = [{text: prevStorageTodos[0].text}];
    set.push(prevStorageTodos[0].text);
    localStorage.setItem('KeyData', JSON.stringify(set));
    this.getStorageTodo();
  }
  getStorageTodo() {
    let getData = JSON.parse(localStorage.getItem('KeyData'));
    let createDom = document.createElement('p');
    createDom.innerHTML = getData[0].text;
    document.querySelector('.is-storage').appendChild(createDom);
    this.setState({
      isStorageActive: getData[0].length !== 1 ? true : false
    });

  }
  render () {
    const todos = this.state.todos;
    const storageTodos = this.state.storageTodos;
    return (
      <div>
        <h2>TodoList</h2>
        <div className="p-form">
          <input type="text" className="c-input" value={this.state.text}
             onChange={ (e) => {
               this.setState({
                 text: e.target.value
               });
             }}
          />
          <button className="c-button"
            onClick={ ()=> {
              this.addTodo({
                id: this.state.id + 1,
                done: false,
                text: this.state.text
              });
            }}
          >押下</button>
        </div>
        <div className={`p-result ${this.state.isActive ? 'is-active' : ''}`}>
          <ul className="p-result__list">
            {todos.map((todo, i) => {
              if (todo.text === '') return;
              return (
                <TodoItem
                  todo={todo}
                  key={i}
                  onToggle={ () => {
                    this.toggleTodo(i);
                  }}
                  onSetStorage={ () => {
                    this.setStorageTodo({
                      text: this.state.text,
                    });
                    this.getStorageTodo();
                  }}
                  onDelete={ () => {
                    this.deleteTodo(i);
                  }}
                />
              );
            })}
          </ul>
        </div>
        <div className={`p-result ${this.state.isStorageActive ? 'is-active' : ''}`}>
          <ul className="p-result__list">
            {storageTodos.map((todo, i) => {
              if (todo.text === '') return;
              return (
                <StorageItem
                  todo={todo}
                  key={i}
                  onSetStorage={ () => {
                    this.setStorageTodo();
                    this.getStorageTodo();
                  }}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}