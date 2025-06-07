(function () {
  const targets = [EventTarget.prototype, Window.prototype, Document.prototype, HTMLElement.prototype];

  for (const target of targets) {
    const original = target.addEventListener;

    target.addEventListener = function (type, listener, options) {
      if (type === "touchstart") {
        if (typeof options === "boolean") {
          options = { capture: options, passive: true };
        } else if (typeof options === "object" && options !== null) {
          options = { ...options, passive: true };
        } else {
          options = { passive: true };
        }
      }
      return original.call(this, type, listener, options);
    };
  }
})();
