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

// Read the content of the fix-imports.js file
const fixImportsPath = path.join(__dirname, 'js', 'fix-imports.js');
let fixImportsScript = '';
if (fs.existsSync(fixImportsPath)) {
  fixImportsScript = fs.readFileSync(fixImportsPath, 'utf8');
}

// Read the content of the split-type-polyfill.js file
const splitTypePolyfillPath = path.join(__dirname, 'js', 'split-type-polyfill.js');
let splitTypePolyfillScript = '';
if (fs.existsSync(splitTypePolyfillPath)) {
  splitTypePolyfillScript = fs.readFileSync(splitTypePolyfillPath, 'utf8');
}

// Read the content of the snap-svg-fix.js file
const snapSvgFixPath = path.join(__dirname, 'js', 'snap-svg-fix.js');
let snapSvgFixScript = '';
if (fs.existsSync(snapSvgFixPath)) {
  snapSvgFixScript = fs.readFileSync(snapSvgFixPath, 'utf8');
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

// Add the GSAP error fix, fix-imports, split-type polyfill and HMR disable scripts INLINE at the beginning of head
// This ensures they execute as early as possible
if (!html.includes('GSAP error prevention')) {
  // Create an inline script tag with the contents of both scripts
  const inlineScripts = `<script>
// Snap.svg Fix - Must run first
${snapSvgFixScript}

// GSAP Error Fix
${gsapFixScript}

// Import Fix Script
${fixImportsScript}

// Split-Type Polyfill
${splitTypePolyfillScript}

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

// Add favicon if it's missing
if (!html.includes('rel="shortcut icon"')) {
  // Add favicon link tag to head
  const faviconTag = '<link rel="shortcut icon" href="./favicon.ico">';
  html = html.replace('</head>', faviconTag + '</head>');
  
  // Write the updated HTML back to the file
  fs.writeFileSync(htmlPath, html);
  console.log('Successfully added favicon link to HTML');
}

// Make sure we're copying the favicon to the dist folder in the build process
const faviconSrc = path.join(__dirname, 'favicon.ico');
const faviconDest = path.join(__dirname, 'dist', 'favicon.ico');
if (fs.existsSync(faviconSrc) && !fs.existsSync(faviconDest)) {
  try {
    fs.copyFileSync(faviconSrc, faviconDest);
    console.log('Successfully copied favicon.ico to dist folder');
  } catch (err) {
    console.error('Error copying favicon:', err);
  }
}
