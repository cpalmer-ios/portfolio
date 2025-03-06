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

// Just to be extra sure - create an inline script version too
const scriptTag = '<script>document.addEventListener("DOMContentLoaded",function(){const e=document.createElement("script");e.src="./video-fallback.js",e.async=!0,document.head.appendChild(e),console.log("Video fallback script injected")});</script>';

// Add this script just before the closing </body> tag if it's not already there
if (!html.includes('video-fallback.js')) {
  html = html.replace('</body>', scriptTag + '</body>');
  
  // Write the updated HTML back to the file
  fs.writeFileSync(htmlPath, html);
  console.log('Successfully added inline script to HTML');
}
