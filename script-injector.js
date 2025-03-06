// This script injects the video-fallback.js script into the page
document.addEventListener('DOMContentLoaded', function() {
  // Create a new script element
  const script = document.createElement('script');
  script.src = './video-fallback.js';
  script.async = true;
  
  // Append the script to the head
  document.head.appendChild(script);
  
  console.log('Video fallback script injected');
});
