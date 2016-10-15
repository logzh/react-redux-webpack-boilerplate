import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../components/App';
import Cart from '../components/Cart';

import * as Actions from '../actions/cart';

var Content = React.createClass({
  propTypes: {
    actions: PropTypes.shape({
      fetchCart: PropTypes.func,
      increaseCount: PropTypes.func,
      decreaseCount: PropTypes.func,
      updateCount: PropTypes.func,
      deleteItem: PropTypes.func,
      showPanel: PropTypes.func
    }).isRequired
  },

  componentDidMount: function() {
    this.props.actions.fetchUser();
    this.props.actions.fetchCart();
  },

  render: function() {
    var totalPrice = 0;
    var totalCount = 0;
    var props = this.props;

    props.carts.map(function(item) {
      // totalPrice += (item.price * 100 * item.count) / 100;
      totalCount += parseInt(item.count, 10);
    });

    return (
        <App user={props.user} loading={props.loading}>

          <Cart {...props} totalCount={totalCount}/>

        </App>
    );
  }
});

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);
