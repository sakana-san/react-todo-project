import React from 'react';
import ReactMarkdown from 'react-markdown';
import App from './app';

const input = ' - Stateとして todo text を管理する。 \n - onClick でtodoのリストに追加する。';

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2 className="p-panel__heading">Simple todo</h2>
        <App />
        <section className="p-panel__description">
          <ReactMarkdown source={input} />
        </section>
      </div>
    );
  }
}