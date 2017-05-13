import React from 'react';
import ReactDom from 'react-dom';

class HelloReact extends React.Component {
  render() {
    return (
      <div className="p-panel">
        Hello React!!
      </div>
    );
  }
}


ReactDom.render(
  <HelloReact />,
  document.getElementById('root')
);