/**
 * Enhanced video background playback solution for production
 * This script ensures the jellyfish video plays in all environments
 */
(function() {
  // Function to initialize the video
  function initializeVideo() {
    console.log('Video enhancer running...');
    
    // Find all video elements with jellyfish in the source
    const videoElements = document.querySelectorAll('video[src*="jfish"]');
    if (videoElements.length === 0) {
      // If no video was found with jfish in the src, try to find any video element
      const allVideos = document.querySelectorAll('video');
      if (allVideos.length > 0) {
        console.log('Found video without jfish in src');
        enhanceVideo(allVideos);
      } else {
        // If no video element exists, check if we need to create one
        const wrapperElements = document.querySelectorAll('.wrapper-jfish');
        if (wrapperElements.length > 0) {
          console.log('Found wrapper-jfish without video, creating video');
          createVideoElement(wrapperElements);
        }
      }
    } else {
      console.log('Found video with jfish in src');
      enhanceVideo(videoElements);
    }
  }
  
  // Function to enhance existing video elements
  function enhanceVideo(videoElements) {
    videoElements.forEach(video => {
      // Store original attributes
      const originalSrc = video.getAttribute('src') || '';
      const originalAutoplay = video.hasAttribute('autoplay');
      const originalMuted = video.hasAttribute('muted');
      const originalLoop = video.hasAttribute('loop');
      
      // Ensure video has proper attributes
      if (!originalAutoplay) video.setAttribute('autoplay', '');
      if (!originalMuted) video.setAttribute('muted', '');
      if (!originalLoop) video.setAttribute('loop', '');
      
      // Force muted property (needed for autoplay in some browsers)
      video.muted = true;
      
      // Create array of possible video sources
      const possibleSources = [
        './img/jfish1.mov',                // Relative path in img folder
        './jfish1.mov',                    // Root relative path
        '/jfish1.mov',                     // Absolute path
        '/img/jfish1.mov',                 // Absolute path in img folder
        'jfish1.mov',                      // Simple filename
        './jfish1.e9bd588f.mov',           // Hashed version
        '/jfish1.e9bd588f.mov',            // Absolute hashed version
        window.location.origin + '/img/jfish1.mov',  // Full URL in img folder
        window.location.origin + '/jfish1.mov',      // Full URL in root
        'https://web-dev.uk/img/jfish1.mov',         // Hardcoded domain with img path
        'https://web-dev.uk/jfish1.mov'              // Hardcoded domain with root path
      ];
      
      // Remove the src attribute to avoid errors when setting sources
      video.removeAttribute('src');
      
      // Clear any existing source elements
      while (video.firstChild) {
        video.removeChild(video.firstChild);
      }
      
      // Add all possible sources as <source> elements
      possibleSources.forEach(src => {
        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/quicktime';
        video.appendChild(source);
      });
      
      // Also set the src attribute to the original or first source as fallback
      video.setAttribute('src', originalSrc || possibleSources[0]);
      
      // Force load and play
      try {
        video.load();
        
        // Add play handler that handles browser autoplay restrictions
        const playHandler = function() {
          if (video.paused) {
            video.play().catch(e => {
              console.log('Video play prevented by browser:', e);
              // Try again with user interaction
              document.addEventListener('click', function playOnClick() {
                video.play().catch(err => console.log('Play still failed after click'));
                document.removeEventListener('click', playOnClick);
              }, { once: true });
            });
          }
        };
        
        // Try to play immediately
        playHandler();
        
        // Also try after a delay
        setTimeout(playHandler, 1000);
        
        // And after DOM content loaded
        if (document.readyState !== 'complete') {
          document.addEventListener('DOMContentLoaded', playHandler);
        }
        
        // And after full page load
        window.addEventListener('load', playHandler);
      } catch (e) {
        console.error('Error setting up video:', e);
      }
    });
  }
  
  // Function to create a new video element if needed
  function createVideoElement(wrapperElements) {
    wrapperElements.forEach(wrapper => {
      // Check if wrapper already has a video
      if (wrapper.querySelector('video')) return;
      
      // Create a new video element
      const video = document.createElement('video');
      video.style.position = 'absolute';
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'cover';
      video.style.opacity = '1';
      video.setAttribute('autoplay', '');
      video.setAttribute('muted', '');
      video.setAttribute('loop', '');
      video.setAttribute('playsinline', ''); // For iOS
      
      // Add to wrapper
      wrapper.appendChild(video);
      
      // Now enhance the newly created video
      enhanceVideo([video]);
    });
  }
  
  // Try immediately if document is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initializeVideo();
  } else {
    // Otherwise wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', initializeVideo);
  }
  
  // Also try on window load to be sure
  window.addEventListener('load', initializeVideo);
  
  // Try again after a delay for lazy-loaded content
  setTimeout(initializeVideo, 1000);
})();
