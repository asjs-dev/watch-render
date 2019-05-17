# watch-render.js
Trigger "render" event when changed any html element's content or any property

Like div content, size, color are changed dynamically or a hidden element becomes visible

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
