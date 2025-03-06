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

console.log('Asset copying complete!');
