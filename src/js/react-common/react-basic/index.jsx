import React from 'react';


export default class extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      text: '',
      todos: []
    };
  }
  render () {
    const todos = this.state.todos;

    return (
      <div className="p-panel__task">
        <h3 className="p-panel__title">Task List</h3>
        <ul className="p-panel__list">
          {todos.map((todo, i) => {
            // 空白なら発火させない
            if (todo == '') return false;
            return (
              <li key={i}>{ todo }</li>
            );
          })}
        </ul>

        <input
          type="text"
          value={ this.state.text }
          onChange={ e => {
            this.setState({
              text: e.target.value
            });
          }}
        />

        <button className="p-panel__button"
          onClick={ () => {
            const prevTodos = this.state.todos;

            this.setState({
              todos: [
                ...prevTodos,
                this.state.text
              ]
            });

            //リロードされたときにvalueを初期化させる
            this.setState({
              text: ''
            });
          }}

        >クリックしてね</button>
      </div>
    );
  }
}