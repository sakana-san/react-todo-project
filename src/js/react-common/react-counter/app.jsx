import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const count = this.state.count;
    return (
      <div className="p-panel__task">
        <h3 className="p-panel__heading">Count</h3>
        <span className="p-panel__number">{ count }</span>

        <button
          className="c-button--count"
          onClick={ () => {
            this.setState({
              count: count + 1
            });
          }}
        ></button>
      </div>
    );
  }
}