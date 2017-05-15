import React from 'react';
import ReactMarkdown from 'react-markdown';
import Index from './index';

const input = '## Todo app';

export default class extends React.Component {
  render () {
    return (
      <div>
        <div className="p-panel">
          <h2 className="p-panel__heading">TodoToggle</h2>
          <Index />
          <section className="p-panel__description">
            <ReactMarkdown source={input} />
          </section>
        </div>
      </div>
    );
  }
}