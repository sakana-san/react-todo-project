import React from 'react';
import Display from './containers/Display';
import Buttons from './components/Buttons';

export default class extends React.Component {
  render () {
    return (
      <div>
        <Display />
        <Buttons />
      </div>
    );
  }
}