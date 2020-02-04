const tcb = require('tcb-js-sdk');


exports.install = function(Vue, options){
  Vue.prototype.$tcb = tcb.init(options);
}
