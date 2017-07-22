import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

let Display = ({ counter }) => {
  return (
    <div>
      <p>{ counter }</p>
    </div>
  );
};

Display.propTypes = {
  counter: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

Display = connect(mapStateToProps)(Display);

export default Display;