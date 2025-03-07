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
      // Disable any existing error handlers that might be causing issues
      const existingErrorHandler = video.onerror;
      video.onerror = null;
      
      // Store original attributes
      const originalSrc = video.getAttribute('src') || '';
      const originalAutoplay = video.hasAttribute('autoplay');
      const originalMuted = video.hasAttribute('muted');
      const originalLoop = video.hasAttribute('loop');
      
      // Ensure video has proper attributes
      if (!originalAutoplay) video.setAttribute('autoplay', '');
      if (!originalMuted) video.setAttribute('muted', '');
      if (!originalLoop) video.setAttribute('loop', '');
      video.setAttribute('playsinline', ''); // For iOS
      
      // Force muted property (needed for autoplay in some browsers)
      video.muted = true;
      video.defaultMuted = true;
      
      // Try different video formats as fallbacks
      // Check if we have a MOV but should try MP4 as well
      const addMP4Fallback = originalSrc.toLowerCase().endsWith('.mov');
      
      // Create array of possible video sources
      let possibleSources = [
        // Try different paths with MOV
        './img/jfish1.mov',                // Relative path in img folder
        './jfish1.mov',                    // Root relative path
        '/jfish1.mov',                     // Absolute path
        '/img/jfish1.mov',                 // Absolute path in img folder
        'jfish1.mov',                      // Simple filename
        './jfish1.e9bd588f.mov',           // Hashed version
        '/jfish1.e9bd588f.mov',            // Absolute hashed version
        window.location.origin + '/img/jfish1.mov',  // Full URL in img folder
        window.location.origin + '/jfish1.mov'      // Full URL in root
      ];
      
      // Add MP4 versions as fallbacks if original was MOV
      if (addMP4Fallback) {
        possibleSources = possibleSources.concat([
          // MP4 versions as fallbacks
          './img/jfish1.mp4',
          './jfish1.mp4',
          '/jfish1.mp4',
          '/img/jfish1.mp4',
          'jfish1.mp4',
          window.location.origin + '/img/jfish1.mp4',
          window.location.origin + '/jfish1.mp4'
        ]);
      }
      
      // Add WebM versions as fallbacks
      possibleSources = possibleSources.concat([
        './img/jfish1.webm',
        './jfish1.webm',
        '/jfish1.webm',
        '/img/jfish1.webm',
        'jfish1.webm',
        window.location.origin + '/img/jfish1.webm',
        window.location.origin + '/jfish1.mp4'
      ]);
      
      // Remove the src attribute to avoid errors when setting sources
      video.removeAttribute('src');
      
      // Clear any existing source elements
      while (video.firstChild) {
        video.removeChild(video.firstChild);
      }
      
      // Add MOV sources with correct MIME type
      const movSources = possibleSources.filter(src => src.toLowerCase().endsWith('.mov'));
      movSources.forEach(src => {
        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/quicktime';
        video.appendChild(source);
      });
      
      // Add MP4 sources with correct MIME type
      const mp4Sources = possibleSources.filter(src => src.toLowerCase().endsWith('.mp4'));
      mp4Sources.forEach(src => {
        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/mp4';
        video.appendChild(source);
      });
      
      // Add WebM sources with correct MIME type
      const webmSources = possibleSources.filter(src => src.toLowerCase().endsWith('.webm'));
      webmSources.forEach(src => {
        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/webm';
        video.appendChild(source);
      });
      
      // Create a fallback image for browsers that don't support video
      const fallbackImg = document.createElement('img');
      fallbackImg.src = './img/jfish1-fallback.jpg';
      fallbackImg.alt = 'Jellyfish animation';
      fallbackImg.style.width = '100%';
      fallbackImg.style.height = '100%';
      fallbackImg.style.objectFit = 'cover';
      video.appendChild(fallbackImg);
      
      // Also set the src attribute to the original or first source as fallback
      if (originalSrc) {
        video.setAttribute('src', originalSrc);
      }
      
      // Force load
      try {
        video.load();
        
        // Add play handler that handles browser autoplay restrictions
        const playHandler = function() {
          if (video.paused) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(e => {
                console.log('Video play prevented by browser:', e);
                
                // Try again with user interaction once
                if (!video._userInteractionHandlerAdded) {
                  video._userInteractionHandlerAdded = true;
                  
                  // Add one-time handlers for user interaction events
                  const userEvents = ['click', 'touchstart', 'keydown', 'scroll'];
                  const userInteractionHandler = function() {
                    video.play().catch(err => {
                      console.log('Play still failed after user interaction:', err);
                      
                      // If video still fails to play, check for specific format issues
                      if (err.name === 'NotSupportedError') {
                        // Try changing to MP4 or WebM if MOV isn't supported
                        const mp4Source = video.querySelector('source[type="video/mp4"]');
                        if (mp4Source) {
                          video.src = mp4Source.src;
                          video.load();
                          video.play().catch(e => console.log('MP4 fallback also failed:', e));
                        }
                      }
                    });
                    
                    // Remove all event listeners after one triggers
                    userEvents.forEach(evt => {
                      document.removeEventListener(evt, userInteractionHandler);
                    });
                  };
                  
                  // Add the event listeners
                  userEvents.forEach(evt => {
                    document.addEventListener(evt, userInteractionHandler, { once: true });
                  });
                }
              });
            }
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
        
        // Add specific error handling for different browsers
        video.addEventListener('error', function(e) {
          console.log('Video error event triggered:', video.error);
          
          // Check for specific error types
          if (video.error && video.error.code === 4) {
            // MEDIA_ERR_SRC_NOT_SUPPORTED
            // Try the next source element
            const sources = video.querySelectorAll('source');
            let nextSourceFound = false;
            
            for (let i = 0; i < sources.length; i++) {
              if (sources[i].src === video.src) {
                if (i + 1 < sources.length) {
                  // Try the next source
                  video.src = sources[i + 1].src;
                  video.load();
                  video.play().catch(e => console.log('Next source also failed:', e));
                  nextSourceFound = true;
                  break;
                }
              }
            }
            
            // If we couldn't find the next source or there isn't one
            if (!nextSourceFound) {
              // Check if any fallback image is available
              const fallbackImg = video.querySelector('img');
              if (fallbackImg) {
                // Make sure image is visible
                fallbackImg.style.display = 'block';
              }
            }
          }
        });
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
  
  // Check if we need to convert MOV files to MP4
  function checkAndCreateMP4Fallbacks() {
    // Check if we have mp4 versions of the video files
    const mp4Path = './img/jfish1.mp4';
    const mp4Exists = false; // We'll just attempt to create it anyway
    
    if (!mp4Exists) {
      // In a real production environment, we would generate MP4 versions
      // For now, we'll just create a fallback image at least
      createFallbackImage();
    }
  }
  
  // Create a fallback image for browsers that can't play the video
  function createFallbackImage() {
    // Instead of actually creating an image (which we can't do in JS),
    // we'll check if one exists and add code to use it if it does
    const imgPath = './img/jfish1-fallback.jpg';
    
    // Add fallback handling for video error events
    document.addEventListener('DOMContentLoaded', function() {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.addEventListener('error', function() {
          // Try to add the fallback image if video fails
          const wrapper = video.parentElement;
          if (wrapper && wrapper.classList.contains('wrapper-jfish')) {
            const existingImg = wrapper.querySelector('img');
            if (!existingImg) {
              const fallbackImg = document.createElement('img');
              fallbackImg.src = imgPath;
              fallbackImg.alt = 'Jellyfish animation';
              fallbackImg.style.width = '100%';
              fallbackImg.style.height = '100%';
              fallbackImg.style.objectFit = 'cover';
              wrapper.appendChild(fallbackImg);
            }
          }
        });
      });
    });
  }
  
  // Try immediately if document is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initializeVideo();
    checkAndCreateMP4Fallbacks();
  } else {
    // Otherwise wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
      initializeVideo();
      checkAndCreateMP4Fallbacks();
    });
  }
  
  // Also try on window load to be sure
  window.addEventListener('load', initializeVideo);
  
  // Try again after a delay for lazy-loaded content
  setTimeout(initializeVideo, 1000);
})();
