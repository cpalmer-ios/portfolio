# Deployment Guide for Portfolio

This document explains how to deploy the portfolio site correctly.

## Local Development

To run the project locally:

```bash
npm run start
```

This will start a development server that bundles assets using Parcel.

## Building for Production

To build the project for production:

```bash
npm run build
```

This does several things:
1. Cleans the `dist` directory
2. Builds the project with Parcel using proper URLs
3. Copies all necessary assets including:
   - JS files and vendors
   - CSS files
   - Images
   - Fonts
4. Copies configuration files like CNAME, .htaccess, and _redirects

## Deploying to GitHub Pages

To deploy to GitHub Pages:

```bash
npm run deploy
```

This will:
1. Build the project
2. Deploy the contents of the `dist` directory to the `gh-pages` branch

## Configuration Files

Several configuration files have been set up to ensure proper deployment:

1. **CNAME** - Contains your custom domain (web-dek.uk)
2. **.htaccess** - Contains server configuration for proper file handling
3. **_redirects** - For Netlify deployments (optional)
4. **netlify.toml** - For Netlify deployments (optional)
5. **copy-assets.js** - Script to copy all necessary files to the dist directory

## Troubleshooting

If you encounter 404 errors for resources:

1. Check the browser console to see which files are missing
2. Verify that all needed files are being copied by the copy-assets.js script
3. Make sure your DNS records are properly configured for your custom domain
4. Check that paths in your HTML/JS files are consistent with how files are organized in the build

## DNS Configuration

Ensure your domain has these records:

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

And if you want www to work:

```
CNAME    www    cpalmer-ios.github.io.
```
