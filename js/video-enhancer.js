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
      video.onerror = function(e) {
        console.log('Video error event triggered:', e.target.error);
        useVideoFallback(video);
      };
      
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
      
      // Add multiple sources for better browser compatibility
      if (!video.querySelector('source')) {
        // Only add sources if none exist already
        const basePath = originalSrc.substring(0, originalSrc.lastIndexOf('.')) || 'jfish1';
        
        // Clear src attribute if we're adding source elements
        if (originalSrc) {
          video.removeAttribute('src');
        }
        
        // Add MP4 source first (most compatible)
        const mp4Source = document.createElement('source');
        mp4Source.type = 'video/mp4';
        mp4Source.src = basePath + '.mp4';
        video.appendChild(mp4Source);
        
        // Add WebM source (better compression, modern browsers)
        const webmSource = document.createElement('source');
        webmSource.type = 'video/webm';
        webmSource.src = basePath + '.webm';
        video.appendChild(webmSource);
        
        // Add poster for initial display
        video.setAttribute('poster', basePath + '-fallback.jpg');
      }
      
      // Try to play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video play promise failed:', error);
          
          // Use the fallback for autoplay issues
          if (error.name === 'NotAllowedError') {
            console.log('Autoplay not allowed, using fallback image');
            useVideoFallback(video);
          } else {
            // For other errors, try loading a different video format
            tryDifferentFormats(video);
          }
        });
      }
    });
  }
  
  // Function to try different video formats
  function tryDifferentFormats(video) {
    // Check if the browser can play MP4
    const canPlayMP4 = video.canPlayType('video/mp4');
    const canPlayWebM = video.canPlayType('video/webm');
    const canPlayMov = video.canPlayType('video/quicktime');
    
    console.log('Browser video format support - MP4:', canPlayMP4, 'WebM:', canPlayWebM, 'MOV:', canPlayMov);
    
    // Replace all sources with appropriate format based on browser support
    const sources = video.querySelectorAll('source');
    const basePath = sources.length > 0 ? 
      sources[0].src.substring(0, sources[0].src.lastIndexOf('.')) : 
      'jfish1';
    
    // Clear existing sources
    while (video.firstChild) {
      video.removeChild(video.firstChild);
    }
    
    // Add sources in order of browser preference
    if (canPlayMP4) {
      const source = document.createElement('source');
      source.src = basePath + '.mp4';
      source.type = 'video/mp4';
      video.appendChild(source);
    }
    
    if (canPlayWebM) {
      const source = document.createElement('source');
      source.src = basePath + '.webm';
      source.type = 'video/webm';
      video.appendChild(source);
    }
    
    if (canPlayMov) {
      const source = document.createElement('source');
      source.src = basePath + '.mov';
      source.type = 'video/quicktime';
      video.appendChild(source);
    }
    
    // Clear the src attribute
    video.src = '';
    
    // Try to load and play again
    video.load();
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(error => {
        console.log('Still failed after format change:', error);
        useVideoFallback(video);
      });
    }
  }
  
  // Function to create a new video element
  function createVideoElement(wrapperElements) {
    wrapperElements.forEach(wrapper => {
      // Check if wrapper already contains a video
      if (wrapper.querySelector('video')) return;
      
      // Create video element
      const video = document.createElement('video');
      video.className = 'video-background';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.setAttribute('playsinline', '');
      
      // Add MP4 source
      const mp4Source = document.createElement('source');
      mp4Source.src = './jfish1.mp4';
      mp4Source.type = 'video/mp4';
      video.appendChild(mp4Source);
      
      // Add WebM source
      const webmSource = document.createElement('source');
      webmSource.src = './jfish1.webm';
      webmSource.type = 'video/webm';
      video.appendChild(webmSource);
      
      // Add fallback image as poster
      video.poster = './jfish1-fallback.jpg';
      
      // Add error handler
      video.onerror = function() {
        useVideoFallback(video);
      };
      
      // Insert the video into the wrapper
      wrapper.insertBefore(video, wrapper.firstChild);
      
      // Try to play
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video play promise failed for created video:', error);
          useVideoFallback(video);
        });
      }
    });
  }
  
  // Function to use a fallback image when video fails
  function useVideoFallback(video) {
    // Create an image element as fallback
    const parent = video.parentElement;
    if (!parent) return;
    
    // Check if fallback already exists
    if (parent.querySelector('.video-fallback')) return;
    
    // Determine fallback image URL
    let fallbackUrl = video.poster;
    if (!fallbackUrl) {
      // Try to get fallback from the src attribute or source elements
      const source = video.querySelector('source') || video;
      const src = source.getAttribute('src') || '';
      fallbackUrl = src.replace(/\.(mp4|webm|mov)$/i, '-fallback.jpg');
    }
    
    if (!fallbackUrl.includes('-fallback')) {
      fallbackUrl = './jfish1-fallback.jpg';
    }
    
    // Create the fallback image
    const fallbackImg = document.createElement('img');
    fallbackImg.className = 'video-fallback';
    fallbackImg.src = fallbackUrl;
    fallbackImg.alt = 'Video background';
    fallbackImg.style.position = 'absolute';
    fallbackImg.style.top = '0';
    fallbackImg.style.left = '0';
    fallbackImg.style.width = '100%';
    fallbackImg.style.height = '100%';
    fallbackImg.style.objectFit = 'cover';
    
    // Hide the video
    video.style.display = 'none';
    
    // Insert the fallback image
    parent.insertBefore(fallbackImg, video);
    
    console.log('Fallback image added for video');
  }
  
  // Wait for DOM content to be loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeVideo);
  } else {
    // DOM already loaded, initialize immediately
    initializeVideo();
  }
  
  // Also initialize on window load in case videos are loaded late
  window.addEventListener('load', initializeVideo);
})();
