const fs = require('fs');
const path = require('path');

// Path to the HTML file
const htmlPath = path.join(__dirname, 'dist', 'index.html');

// Check if the file exists
if (!fs.existsSync(htmlPath)) {
  console.error('HTML file not found:', htmlPath);
  process.exit(1);
}

// Read the HTML file
let html = fs.readFileSync(htmlPath, 'utf8');

// Read the content of the fix-gsap-errors.js file
const gsapFixPath = path.join(__dirname, 'js', 'fix-gsap-errors.js');
let gsapFixScript = '';
if (fs.existsSync(gsapFixPath)) {
  gsapFixScript = fs.readFileSync(gsapFixPath, 'utf8');
}

// Read the content of the disable-hmr.js file
const hmrDisablePath = path.join(__dirname, 'js', 'disable-hmr.js');
let hmrDisableScript = '';
if (fs.existsSync(hmrDisablePath)) {
  hmrDisableScript = fs.readFileSync(hmrDisablePath, 'utf8');
}

// Read the content of the demo-fix.js file
const demoFixPath = path.join(__dirname, 'js', 'demo-fix.js');
let demoFixScript = '';
if (fs.existsSync(demoFixPath)) {
  demoFixScript = fs.readFileSync(demoFixPath, 'utf8');
}

// Read the content of the video-enhancer.js file
const videoEnhancerPath = path.join(__dirname, 'js', 'video-enhancer.js');
let videoEnhancerScript = '';
if (fs.existsSync(videoEnhancerPath)) {
  videoEnhancerScript = fs.readFileSync(videoEnhancerPath, 'utf8');
}

// Check if our script injector is already included
if (html.includes('script-injector.js')) {
  console.log('Script injector already present in HTML');
} else {
  // Add our script injector just before the closing </head> tag
  html = html.replace('</head>', '<script src="./script-injector.js"></script></head>');
  
  // Write the updated HTML back to the file
  fs.writeFileSync(htmlPath, html);
  console.log('Successfully added script injector to HTML');
}

// Add the GSAP error fix and HMR disable scripts INLINE at the beginning of head
// This ensures they execute as early as possible
if (!html.includes('GSAP error prevention')) {
  // Create an inline script tag with the contents of both scripts
  const inlineScripts = `<script>
// GSAP Error Fix
${gsapFixScript}

// HMR Disable Script
${hmrDisableScript}
</script>`;
  
  // Add it as the first element in <head> to execute before anything else
  html = html.replace('<head>', '<head>\n' + inlineScripts);
  
  // Write the updated HTML back to the file
  fs.writeFileSync(htmlPath, html);
  console.log('Successfully added inline fix scripts to HTML');
}

// Add the video enhancer script early in the <head> to ensure it loads before page rendering
if (!html.includes('Video enhancer running')) {
  // Add the enhanced video script
  const videoEnhancerTag = `<script>${videoEnhancerScript}</script>`;
  
  // Add it early in the <head> but after the GSAP fixes
  if (html.includes('GSAP error prevention')) {
    html = html.replace('</script>\n', '</script>\n' + videoEnhancerTag);
  } else {
    html = html.replace('<head>', '<head>\n' + videoEnhancerTag);
  }
  
  // Write the updated HTML back to the file
  fs.writeFileSync(htmlPath, html);
  console.log('Successfully added video enhancer script to HTML');
}

// Add the demo-fix script just before the closing </body> tag
// This script needs to run after demo.js is loaded
if (!html.includes('Creating placeholder for missing element')) {
  // Add the demo fix script
  const demoFixTag = `<script>${demoFixScript}</script>`;
  
  // Add it right before the closing </body> tag
  html = html.replace('</body>', demoFixTag + '</body>');
  
  // Write the updated HTML back to the file
  fs.writeFileSync(htmlPath, html);
  console.log('Successfully added demo fix script to HTML');
}
