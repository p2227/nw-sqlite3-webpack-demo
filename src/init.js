import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './routers'

// install router
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  history: !__DEV__,
  saveScrollPosition: true
})

// configure router
configRouter(router)

// boostrap the app
const App = Vue.extend(require('./modules/app/index.vue'))
router.start(App, '#app-view')

// just for debugging
__DEV__ && (window.router = router)


// var userObj = require('./actions/userAction');
// var rxUserData = userObj.getUsersData({
// 	name:'user',
// 	password:'1'
// });
// console.log(rxUserData);
// rxUserData.subscribe(function(args){
// 	console.log(args)
// },function(err){
// 	console.error(err);
// })