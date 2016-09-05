export default (router) => router.map({
  '/': {
    name: 'simple',
    component: require('./views/simple')
  },
  '/item-types': {
    name: 'item-types',
    component: require('./views/itemTypes')
  },
  '/handler': {
    name: 'handler',
    component: require('./views/handler')
  },
  '/horizontal': {
    name: 'horizontal',
    component: require('./views/horizontal')
  },
  '*': {
    component: require('./views/simple'),
  }
});
