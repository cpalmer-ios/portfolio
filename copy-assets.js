const fs = require('fs');
const path = require('path');

// Source directories to copy
const srcDirs = [
  { 
    src: 'js', 
    dest: 'dist/js',
    exclude: [] // Any files to exclude in this directory
  },
  { 
    src: 'css', 
    dest: 'dist/css',
    exclude: [] 
  },
  {
    src: 'img',
    dest: 'dist/img',
    exclude: []
  },
  {
    src: 'fonts',
    dest: 'dist/fonts',
    exclude: []
  }
];

// Ensure target directory exists
function ensureDirectoryExistence(dirPath) {
  if (fs.existsSync(dirPath)) {
    return true;
  }
  
  fs.mkdirSync(dirPath, { recursive: true });
  console.log(`Created directory: ${dirPath}`);
  return true;
}

// Copy a file
function copyFile(src, dest) {
  try {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${src} -> ${dest}`);
  } catch (err) {
    console.error(`Error copying ${src} to ${dest}:`, err);
  }
}

// Recursively copy directory
function copyDirectoryRecursive(src, dest) {
  // Skip if source doesn't exist
  if (!fs.existsSync(src)) {
    console.log(`Source directory doesn't exist, skipping: ${src}`);
    return;
  }
  
  // Ensure destination exists
  ensureDirectoryExistence(dest);
  
  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  // Process each entry
  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively copy directory
      copyDirectoryRecursive(srcPath, destPath);
    } else {
      // Copy file
      copyFile(srcPath, destPath);
    }
  });
}

// Process each directory
srcDirs.forEach(dir => {
  const srcPath = path.join(__dirname, dir.src);
  const destPath = path.join(__dirname, dir.dest);
  
  copyDirectoryRecursive(srcPath, destPath);
});

// Special handling for the jfish1.mov file
const sourceDir = __dirname;
const distDir = path.join(__dirname, 'dist');
const jfishSrcPath = path.join(sourceDir, 'img', 'jfish1.mov');
if (fs.existsSync(jfishSrcPath)) {
  // Copy to multiple locations to maximize the chance it's found
  const jfishDestPaths = [
    path.join(distDir, 'jfish1.mov'),              // Root directory
    path.join(distDir, 'img', 'jfish1.mov'),       // img directory
    path.join(distDir, 'jfish1.e9bd588f.mov')      // Hashed version in root
  ];
  
  // Ensure img directory exists
  const imgDir = path.join(distDir, 'img');
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
  }
  
  // Copy to all destinations
  jfishDestPaths.forEach(destPath => {
    try {
      copyFile(jfishSrcPath, destPath);
      console.log(`Copied: ${jfishSrcPath} -> ${destPath}`);
    } catch (error) {
      console.error(`Error copying to ${destPath}:`, error);
    }
  });
}

// Copy the video fallback script
const fallbackScriptSrc = path.join(__dirname, 'video-fallback.js');
const fallbackScriptDest = path.join(__dirname, 'dist', 'video-fallback.js');
if (fs.existsSync(fallbackScriptSrc)) {
  copyFile(fallbackScriptSrc, fallbackScriptDest);
}

// Copy the script injector
const injectorScriptSrc = path.join(__dirname, 'script-injector.js');
const injectorScriptDest = path.join(__dirname, 'dist', 'script-injector.js');
if (fs.existsSync(injectorScriptSrc)) {
  copyFile(injectorScriptSrc, injectorScriptDest);
}

// Copy the domain verification file
const verificationSrc = path.join(__dirname, 'github-domain-verification.txt');
const verificationDest = path.join(__dirname, 'dist', 'github-domain-verification.txt');
if (fs.existsSync(verificationSrc)) {
  copyFile(verificationSrc, verificationDest);
}

// Copy the GSAP error fix script
const gsapFixSrc = path.join(__dirname, 'js', 'fix-gsap-errors.js');
const gsapFixDest = path.join(__dirname, 'dist', 'js', 'fix-gsap-errors.js');
if (fs.existsSync(gsapFixSrc)) {
  copyFile(gsapFixSrc, gsapFixDest);
}

// Copy the HMR disable script
const hmrDisableSrc = path.join(__dirname, 'js', 'disable-hmr.js');
const hmrDisableDest = path.join(__dirname, 'dist', 'js', 'disable-hmr.js');
if (fs.existsSync(hmrDisableSrc)) {
  copyFile(hmrDisableSrc, hmrDisableDest);
}

// Copy the demo fix script
const demoFixSrc = path.join(__dirname, 'js', 'demo-fix.js');
const demoFixDest = path.join(__dirname, 'dist', 'js', 'demo-fix.js');
if (fs.existsSync(demoFixSrc)) {
  copyFile(demoFixSrc, demoFixDest);
}

// Copy the enhanced video script
const videoEnhancerSrc = path.join(__dirname, 'js', 'video-enhancer.js');
const videoEnhancerDest = path.join(__dirname, 'dist', 'js', 'video-enhancer.js');
if (fs.existsSync(videoEnhancerSrc)) {
  copyFile(videoEnhancerSrc, videoEnhancerDest);
}

// Manually copy index.html from root to dist directory if needed
const indexHtmlSrc = path.join(__dirname, 'index.html');
const indexHtmlDest = path.join(__dirname, 'dist', 'index.html');
if (fs.existsSync(indexHtmlSrc) && !fs.existsSync(indexHtmlDest)) {
  console.log('Index.html not found in dist directory. Copying from root...');
  copyFile(indexHtmlSrc, indexHtmlDest);
}

console.log('Asset copying complete!');
