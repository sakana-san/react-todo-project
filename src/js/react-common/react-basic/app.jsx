import React from 'react';
import ReactMarkdown from 'react-markdown';
import Index from './index';

const input = ' - Stateとして todo text を管理する。 \n - onClick でtodoのリストに追加する。';

export default class extends React.Component {
  render() {
    return (
      <div>
        <div className="p-panel">
          <h2 className="p-panel__heading">Simple todo</h2>
          <Index />
          <section className="p-panel__description">
            <ReactMarkdown  source={input} />
          </section>
        </div>
      </div>
    );
  }
}