var watchRender = watchRender || (function() {
  var style = document.createElement("style");
      style.innerText = ".watch-render, .watch-render *{transition: all 0.01s; animation: watch-resize 0;} @keyframes watch-resize{0%{opacity:1;}100%{opacity:1;}}";
  document.head.append(style);
  
  return function(target) {
    var _scope = {};

    var _isWatching = false;
    var _target     = target;

    var _timeoutId;

    _scope.startWatch = function() {
      if (_isWatching) return;
      _isWatching = true;

      _scope.stopWatch();

      _target.className += " watch-render";

      _target.addEventListener("DOMSubtreeModified", throttle);
      _target.addEventListener("transitionend",      throttle);
      _target.addEventListener("animationend",       throttle);
    };

    _scope.stopWatch = function() {
      _isWatching = false;
      
      removeWatchRenderClass();
      
      _target.removeEventListener("DOMSubtreeModified", throttle);
      _target.removeEventListener("transitionend",      throttle);
      _target.removeEventListener("animationend",       throttle);
    }

    function throttle() {
      clearTimeout(_timeoutId);
      _timeoutId = setTimeout(_target.dispatchEvent.bind(this, new Event("render")), 10);
    }
    
    function removeWatchRenderClass() {
      var classNames = _target.className.split(" ");
      var index      = classNames.indexOf("watch-render");
      classNames.splice(index, 1);
      _target.className = classNames.join(" ");
    }

    _scope.startWatch();

    return _scope;
  };
})();
