import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import RouterConfig from './routers';

import VueDragAndDropList from '../../dist/vue-drag-and-drop-list';

Vue.use(VueDragAndDropList);
Vue.use(VueRouter);
const router = new VueRouter();
RouterConfig(router);

router.start(Vue.extend(App), '#index');
