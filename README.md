# vue-smoothscroll

> it&#x27;s a vuejs version of waves Based on https://github.com/alicelieutier/smoothScroll/blob/master/smoothscroll.js

## How to Use

``` bash
# install dependencies
npm install vue-smoothscroll
```
then in the js file , you can use with router or others
``` javascript
var Vue = require('vue')
var Router =  require('vue-router');
var vueSmoothScroll = require('vue-smoothscroll');
Vue.use(Router);
Vue.use(vueSmoothScroll);

Router.beforeEach(function (transition) {
  this.$SmoothScroll.destroy();
  transition.next();
})

Router.afterEach(function (transition) {
  this.$SmoothScroll.run();
})

```


