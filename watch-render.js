var watchRender = watchRender || (function() {
  var style = document.createElement("style");
      style.innerText = "@keyframes watch-resize{0%{opacity:1;}100%{opacity:1;}}";
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

      _target.style.transition = "all 0.01s";
      _target.style.animation  = "watch-resize 0";

      _target.addEventListener("DOMSubtreeModified", throttle);
      _target.addEventListener("transitionend",      throttle);
      _target.addEventListener("animationend",       throttle);
    };

    _scope.stopWatch = function() {
      _isWatching = false;

      _target.removeEventListener("DOMSubtreeModified", throttle);
      _target.removeEventListener("transitionend",      throttle);
      _target.removeEventListener("animationend",       throttle);
    }

    function throttle() {
      clearTimeout(_timeoutId);
      _timeoutId = setTimeout(function() {
        _target.dispatchEvent(new Event("render"));
      }, 10);
    }

    _scope.startWatch();

    return _scope;
  };
})();
