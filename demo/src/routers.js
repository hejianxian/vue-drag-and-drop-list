export default (router) => router.map({
  '/': {
    name: 'nested',
    component: require('./views/nestedContainers')
  },
  '/simple': {
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
    component: require('./views/nestedContainers'),
  }
});
