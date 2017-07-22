import React from 'react';
import PropTypes from 'prop-types';


const Button = ({children, onClick, behavior}) => {
  return (
    <button onClick={onClick}>
      { children }
    </button>
  );
};

Button.propTypes = {
  behavior: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};


export default Button;