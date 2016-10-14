import React, {PropTypes, Component} from 'react';

var App = function(props) {
  return (
      <div>
        {props.children}
      </div>
  );
};

App.propTypes = {
  user: PropTypes.object
};

App.defaultProps = {
  user: {}
};

export default App;
