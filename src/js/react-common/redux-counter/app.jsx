import React from 'react';
import { createStore } from 'redux';
import expect from 'expect';

function counter(count=0, action) {
  switch(action.type) {
    case 'INCREMENT' :
      return count + 1;

    default:
      return count;
  }
}

expect(counter(0, {type: 'INCREMENT'})).toBe(1);

const store = createStore(counter);

export default class extends React.Component {

  componentWillMount () {
    this.unsubscribe = store.subscribe(this.forceUpdate.bind(this));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }
  render () {
    const count = store.getState();

    return (
      <div className="p-panel__task">
        <h3 className="p-panel__heading">redux count</h3>
        <span className="p-panel__number">{ count }</span>
        <button
          className="c-button--count"
          onClick={ () => {
            store.dispatch({type: 'INCREMENT'});
          }}
        ></button>
      </div>
    );
  }
}

//reducer:  装置
//dispatch: 発送する
//subscribe: 申し込む
//INCREMENT: 増加