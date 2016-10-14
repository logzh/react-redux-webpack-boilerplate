import React, {PropTypes} from 'react';
import Item from './Item';

var List = function(props) {
  var totalPrice = 0;
  var createItem = (item, index)=>(<Item item={item} key={index} {...props.actions}/>);

  props.items.map(function(item) {
    totalPrice += Math.floor(item.price * 100 * item.count) / 100;
  });
  totalPrice = Math.floor(totalPrice * 100) / 100;
  
  return (
      <div className="main-info">
        <ul className="header">
          <li className="goods">商品</li>
          <li className="price">单价</li>
          <li className="num">数量</li>
          <li className="sum">小计</li>
          <li className="operate">操作</li>
        </ul>
        <div className="evaluate-pic">
          <ul className="content">
            {props.items.map(createItem, this)}
          </ul>

          <div className="cart-bar clearfix">

            <div className="bar-right">
              <p><span>合计：</span><strong className="blue font25">{'￥' + totalPrice}</strong></p>
              <a href="#!" className="payment">去结算</a>
            </div>
          </div>
        </div>
      </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    increaseCount: PropTypes.func.isRequired,
    decreaseCount: PropTypes.func.isRequired,
    updateCount: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  }).isRequired
};

export default List;
