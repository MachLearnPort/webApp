import React from 'react';
import PropTypes from 'prop-types';

// Header component
// This is a stateless component
const Header = ({ message }) => {
  return (
    <h2 className="Header text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: PropTypes.string.isRequired
};

export default Header;
