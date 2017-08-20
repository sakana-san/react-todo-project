import React from 'react';
import Header from './react-layout/Header';
import TodoList from './react-todo-list';
import Footer from './react-layout/Footer';



export default class extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  }
}