const tcb = require('tcb-js-sdk');

VueTcb.install = function(Vue, options){
  Vue.cloud = tcb;
  Vue.prototype.$tcb = tcb.init(options);
}