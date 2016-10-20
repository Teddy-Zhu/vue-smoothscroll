

let SmoothScroll = require("smoothscroll")

module.exports = {
    install(Vue, options = { name: 'smoothscroll' }) {
        Vue.directive(options.name, {
            inserted(el, binding) {
                SmoothScroll(el, binding.value["duration"], binding.value["callback"], binding.value["context"])
            }
        })
        Object.defineProperty(Vue.prototype, '$SmoothScroll', {
            get: function () {
                return SmoothScroll;
            }
        });
    }
}
