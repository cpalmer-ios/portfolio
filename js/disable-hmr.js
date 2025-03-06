/**
 * This script disables HMR (Hot Module Replacement) in production
 * to prevent WebSocket connection errors in the console
 */
(function() {
  // Check if we're in production (not localhost)
  const isProduction = 
    window.location.hostname !== 'localhost' && 
    window.location.hostname !== '127.0.0.1';
  
  if (isProduction) {
    // Disable HMR by overriding Parcel's HMR functions
    if (window.HMR_RUNTIME) {
      console.log('Disabling HMR in production');
      window.HMR_RUNTIME.createHotModuleReplacementRuntimeModule = function() {
        return {
          dispose: function() {},
          accept: function() {},
          invalidate: function() {}
        };
      };
    }
    
    // Prevent WebSocket connection attempts
    const originalWebSocket = window.WebSocket;
    window.WebSocket = function(url, protocols) {
      if (url.includes('web-dev.uk') || url.includes('web-dek.uk')) {
        console.log('Blocked WebSocket connection to HMR server in production');
        // Return a dummy WebSocket object
        return {
          close: function() {},
          send: function() {},
          addEventListener: function() {},
          removeEventListener: function() {}
        };
      }
      
      // For other WebSocket connections, use the original implementation
      return new originalWebSocket(url, protocols);
    };
  }
})();
