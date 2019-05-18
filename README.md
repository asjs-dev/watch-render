# watch-render.js
Trigger "render" event when any html element's content or any property are changed

Like div content, size, color are dynamically changed or a hidden element becomes visible

It works with css animations and transitions

Event will also be triggered when child element is changed

## Demo
https://codepen.io/iroshan/pen/JqJdLY

## Example
```javascript
var resizable = document.querySelector(selector);
var renderWatcher = watchRender(resizable);
resizable.addEventListener("render", function() {
  console.log("rendered", resizable.offsetWidth);
});
```

## API
**startWatch:** *Start watching element changes and fire "render" event*

**stopWatch:** *Stop watching element changes*
