import React, {PropTypes} from 'react';

var Item = React.createClass({
  decreaseCount: function() {
    const {id, sizeId, count} = this.props.item;
    if (count > 1) {
      this.props.decreaseCount({id, sizeId, count});
    }
  },
  increaseCount: function() {
    const {id, sizeId, count} = this.props.item;
    this.props.increaseCount({id, sizeId, count});
  },
  updateCount: function(e) {
    const {id, sizeId} = this.props.item;
    const count = parseInt(e.target.value, 10);

    console.log(count)
    if (count > 0) {
      this.props.updateCount({id, sizeId, count});
    }
  },
  render: function() {
    var props = this.props;
    return (
        <li className="clearfix">
          <div className="goods clearfix">
            <a href="#!"><img src={props.item.thumb} alt=""/></a>
            <div className="goods-info">
              <p><strong><a href="#!">{props.item.name}</a></strong><i></i></p>
              <p><span>{props.item.sizeName}</span></p>
            </div>
          </div>
          <div className="price">{'￥' + props.item.price}</div>
          <div className="num">
            <div className="num-input">
              <span className="minus" name="down" onClick={this.decreaseCount}>-</span>
              <input type="text" name="num" onChange={this.updateCount} value={props.item.count}
                     className="input"/>
              <span className="plus" name="up" onClick={this.increaseCount}>+</span>
            </div>
          </div>
          <div className="sum">
            <p>{'￥' + (props.item.price * 100 * props.item.count) / 100}</p>
          </div>
          <div className="operate">
            <i className="del-ico" onClick={props.deleteItem.bind(this, props.item)}><span>删除</span></i>
          </div>
        </li>
    );
  }
});

Item.propTypes = {
  item: PropTypes.object.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  updateCount: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default Item;
