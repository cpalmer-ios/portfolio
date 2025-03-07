/**
 * This script specifically fixes the Snap.svg "Cannot set properties of undefined (setting 'eve')" error
 * It runs before Snap.svg is loaded to ensure the eve object exists
 */
(function() {
  console.log('Snap.svg fix running...');
  
  // Create a global eve object before Snap.svg loads
  if (!window.eve) {
    window.eve = function() {
      var args = Array.prototype.slice.call(arguments);
      eve.listeners = eve.listeners || {};
      var name = args.shift();
      var listeners = eve.listeners[name] || [];
      var result;
      
      for (var i = 0, ii = listeners.length; i < ii; i++) {
        result = listeners[i].apply(window, args);
      }
      
      return result;
    };
    
    // Add core eve functionality
    eve.on = function(name, f) {
      eve.listeners = eve.listeners || {};
      var names = name.split(/\s+/);
      for (var i = 0; i < names.length; i++) {
        eve.listeners[names[i]] = eve.listeners[names[i]] || [];
        eve.listeners[names[i]].push(f);
      }
      return function() {
        for (var i = 0; i < names.length; i++) {
          var listeners = eve.listeners[names[i]] || [];
          for (var j = 0; j < listeners.length; j++) {
            if (listeners[j] === f) {
              listeners.splice(j, 1);
              break;
            }
          }
        }
      };
    };
    
    eve.off = function(name, f) {
      if (!name) {
        eve.listeners = {};
        return;
      }
      var names = name.split(/\s+/);
      for (var i = 0; i < names.length; i++) {
        if (!eve.listeners[names[i]]) {
          continue;
        }
        if (!f) {
          eve.listeners[names[i]] = [];
          continue;
        }
        var listeners = eve.listeners[names[i]] || [];
        for (var j = 0; j < listeners.length; j++) {
          if (listeners[j] === f) {
            listeners.splice(j, 1);
            break;
          }
        }
      }
    };
    
    eve.once = function(name, f) {
      var onceFn = function() {
        var result = f.apply(this, arguments);
        eve.off(name, onceFn);
        return result;
      };
      return eve.on(name, onceFn);
    };
    
    console.log('Eve object created for Snap.svg');
  } else {
    console.log('Eve object already exists');
  }
  
  // Also make sure Snap exists as an object to avoid other errors
  window.Snap = window.Snap || {};
})();
