import React, {PropTypes} from 'react';
import axios from 'axios';

import App from '../components/App';
import Cart from '../components/Cart';

var noop = function() {};
var DefaultUserMixin = {
  getInitialState: function() {
    return {
      loading: 0,
      user: {
        name: 'spence'
      }
    };
  },
  getDefaultProps: function() {
    actions:{

    }
  }
};

var Content = React.createClass({
  mixins: [DefaultUserMixin],
  // propTypes: {
  //   actions: PropTypes.shape({
  //     fetchCart: PropTypes.func,
  //     increaseCount: PropTypes.func,
  //     decreaseCount: PropTypes.func,
  //     updateCount: PropTypes.func,
  //     deleteItem: PropTypes.func,
  //     showPanel: PropTypes.func
  //   }).isRequired
  // },
  getDefaultProps: function() {
    return {
      name: 'world',
      count: 0
    }
  },
  getInitialState: function() {
    return {
      carts: [],
      isShow: false
    };
  },
  showPanel: function() {
    console.log(11)
    this.setState({isShow: !this.state.isShow});
  },
  componentDidMount: function() {
    var _this = this;

    axios.get('/cgi/mall/cart')
        .then(function(response) {
          //response.data
          _this.setState({carts: response.data})
        })
        .catch(function(error) {
          console.log(error);
        });
    //this.props.actions.fetchUser();
    //this.props.actions.fetchCart();
  },
  render: function() {
    var totalPrice = 0;
    var totalCount = 0;
    var props = this.props;
    var state = this.state;

    state.carts.map(function(item) {
      totalCount += parseInt(item.count, 10);
    });

    var _this = this;
    var actions = {
      increaseCount: noop,
      decreaseCount: noop,
      updateCount: noop,
      deleteItem: noop,
      switchPanel: _this.showPanel
    };

    return (

        <App user={state.user} loading={state.loading}>

          <Cart actions={actions} {...state}   totalCount={totalCount}/>

        </App>
    );
  }
});

export default Content;
