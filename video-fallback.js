// This script ensures the jellyfish video plays by trying multiple fallback paths
document.addEventListener('DOMContentLoaded', function() {
  const videoElements = document.querySelectorAll('video[src*="jfish"]');
  
  videoElements.forEach(video => {
    // Store the original source
    const originalSrc = video.getAttribute('src');
    
    // Function to try loading the video
    const tryLoadingVideo = () => {
      // Check if video is already playing
      if (video.readyState >= 3) return; // HAVE_FUTURE_DATA or better
      
      // Try different paths if the video isn't loading
      const paths = [
        './img/jfish1.mov',           // Relative img path
        '/img/jfish1.mov',            // Root-relative img path
        './jfish1.mov',               // Direct in root directory
        '/jfish1.mov',                // Root-relative
        './jfish1.e9bd588f.mov',      // Parcel hashed version
        '/jfish1.e9bd588f.mov'        // Root-relative hashed version
      ];
      
      // If the current src is in our list, try the next one
      let currentIndex = paths.indexOf(originalSrc);
      if (currentIndex === -1) currentIndex = 0;
      
      // Try the next path
      const nextIndex = (currentIndex + 1) % paths.length;
      video.src = paths[nextIndex];
      console.log('Trying alternate video path:', video.src);
      
      // Try to play the video
      video.load();
      
      // No need for video.play() as the autoplay attribute should handle this
    };
    
    // Add error handler to try fallback paths
    video.addEventListener('error', tryLoadingVideo);
    
    // Also try after a timeout in case the video just doesn't load without an error
    setTimeout(() => {
      if (video.readyState < 3) { // Less than HAVE_FUTURE_DATA
        tryLoadingVideo();
      }
    }, 2000);
  });
});
