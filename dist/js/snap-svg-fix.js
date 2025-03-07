/**
 * This script specifically fixes the Snap.svg "Cannot set properties of undefined (setting 'eve')" error
 * It runs before Snap.svg is loaded to ensure the eve object exists
 */
(function() {
  // Create a global eve object before Snap.svg loads
  window.eve = window.eve || function(event, param) {
    eve.listeners = eve.listeners || {};
    eve.listeners[event] = eve.listeners[event] || [];
    
    const handlers = eve.listeners[event];
    if (handlers) {
      for (let i = 0; i < handlers.length; i++) {
        handlers[i](param);
      }
    }
    return eve;
  };
  
  // Add necessary methods to eve
  eve.on = function(name, f) {
    eve.listeners = eve.listeners || {};
    eve.listeners[name] = eve.listeners[name] || [];
    eve.listeners[name].push(f);
    return function() {
      eve.listeners[name] = eve.listeners[name] || [];
      for (let i = 0; i < eve.listeners[name].length; i++) {
        if (eve.listeners[name][i] === f) {
          eve.listeners[name].splice(i, 1);
          break;
        }
      }
    };
  };
  
  eve.once = function(name, f) {
    const handler = function() {
      f.apply(this, arguments);
      return eve.off(name, handler);
    };
    return eve.on(name, handler);
  };
  
  eve.off = function(name, f) {
    if (!name) {
      eve.listeners = {};
      return;
    }
    if (!f) {
      eve.listeners[name] = [];
      return;
    }
    eve.listeners[name] = eve.listeners[name] || [];
    for (let i = 0; i < eve.listeners[name].length; i++) {
      if (eve.listeners[name][i] === f) {
        eve.listeners[name].splice(i, 1);
        break;
      }
    }
  };
  
  // Let's make sure it gets applied to Snap when it loads
  const originalScriptElem = Element.prototype.appendChild;
  Element.prototype.appendChild = function(element) {
    if (element.tagName === 'SCRIPT' && element.src && element.src.indexOf('snap.svg') > -1) {
      // This is the Snap.svg script - add an onload handler to patch it
      element.onload = function() {
        if (window.Snap && !window.Snap.eve) {
          console.log('Applying eve fix to Snap.svg');
          window.Snap.eve = window.eve;
        }
      };
    }
    return originalScriptElem.call(this, element);
  };
  
  // Also check on DOMContentLoaded in case Snap was loaded via a different method
  document.addEventListener('DOMContentLoaded', function() {
    if (window.Snap && !window.Snap.eve) {
      console.log('Applying eve fix to Snap.svg after DOM load');
      window.Snap.eve = window.eve;
    }
  });
})();
