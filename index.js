var SmoothScroll = require("smoothscroll")
module.exports = {
    install: function(Vue, options) {
        options = options || { name: 'smoothscroll' };
        Vue.directive(options.name, {
            inserted: function(el, binding) {
                SmoothScroll(el, binding.value["duration"], binding.value["callback"], binding.value["context"])
            }
        })
        Object.defineProperty(Vue.prototype, '$SmoothScroll', {
            get: function() {
                return SmoothScroll;
            }
        });
    }
}
