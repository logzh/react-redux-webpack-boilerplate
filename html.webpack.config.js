var mallHome = 'app/html/mall.html';
var devTemplate = 'app/html/dev.html';
var proTemplate = 'app/html/pro.html';

var dev = [
  {
    title: '首页',
    filename: 'index.html',
    template: 'app/html/home.html',
    chunks: []
  },
  {
    title: 'cart',
    filename: 'cart.html',
    template: devTemplate,
    chunks: ['vendor', 'cart']
  },
  {
    title: 'cart-normal',
    filename: 'cart-normal.html',
    template: devTemplate,
    chunks: ['vendor', 'cart-normal']
  }
];

var pro = [
  {
    title: '首页',
    filename: 'index.html',
    template: 'app/html/home.html',
    chunks: []
  },
  {
    title: 'cart',
    filename: 'cart.html',
    template: devTemplate,
    chunks: ['vendor', 'cart']
  },
  {
    title: 'cart-normal',
    filename: 'cart-normal.html',
    template: devTemplate,
    chunks: ['vendor', 'cart-normal']
  }
];

module.exports = {
  dev: dev,
  pro: pro
};
