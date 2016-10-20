# vue-smoothscroll

> it&#x27;s a vuejs version of smoothscroll Based on https://github.com/alicelieutier/smoothScroll/blob/master/smoothscroll.js

## How to Use

``` bash
# install dependencies
npm install vue-smoothscroll
```
then in the js file , you can use with router or others
``` javascript
var vueSmoothScroll = require('vue-smoothscroll');
Vue.use(vueSmoothScroll);

```

```html
   //define a tag
   <div v-smoothscroll="{ duration : 500, callback: callback , context : undefined }" class="message">
       message
   </div>
```

or

```javascript
    this.$SmoothScroll(target,duration,callback,context);
```
params
* `target` is a `HTMLElement Object` from your document that you want to scroll to, or a numeric position on the page
* `duration` is the total duration of the scroll (optional, defaults to 500ms)
* `callback` is a function to be executed when the scrolling is over (optional)
* `context` is the scrolling context (optional, defaults to window, can be any `HTMLElement Object`)
