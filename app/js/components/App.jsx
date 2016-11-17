import React, {PropTypes, Component} from 'react';

var App = function(props) {
  return (
      <div>
        <div>{props.user.name}</div>
        {props.children}
      </div>
  );
};

App.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.number
};

App.defaultProps = {
  user: {name:''},
  loading: 0
};

export default App;
