# DNS Configuration for web-dev.uk

## The Problem: InvalidDNSError

If you're seeing this error:
```
Domain's DNS record could not be retrieved. For more information, see documentation (InvalidDNSError).
```

This means GitHub Pages couldn't verify your DNS records. Here's how to fix it:

## Step 1: Confirm Your Repository Settings

1. Go to your GitHub repository's Settings
2. Scroll down to "GitHub Pages" section
3. Make sure that:
   - Source is set to gh-pages branch (or your deployment branch)
   - Custom domain is set to `web-dev.uk`
   - HTTPS is enforced (if available)

## Step 2: Configure DNS with Your Domain Provider

### Option 1: Using an Apex Domain (web-dev.uk)

Add these A records pointing to GitHub Pages' IP addresses:
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

### Option 2: Using a www subdomain (www.web-dev.uk)

Add a CNAME record:
```
CNAME    www    cpalmer-ios.github.io.
```

### Option 3: Using Both (Recommended)

If you want both the apex domain and www subdomain to work:
1. Set up all the A records above for the apex domain
2. Add the CNAME record for www
3. Create another CNAME record to redirect from apex to www (if your DNS provider supports it):
   ```
   CNAME    @    cpalmer-ios.github.io.
   ```

## Step 3: Add CNAME File to Repository

Ensure you have a CNAME file in the root of your repository with only the domain:
```
web-dev.uk
```

This file should be committed to your main branch AND your gh-pages branch (or deployment branch).

## Step 4: Verify DNS Configuration

After configuring DNS records, they may take up to 24-48 hours to fully propagate.

You can verify DNS configuration using these commands:
```
dig web-dev.uk +noall +answer
dig www.web-dev.uk +noall +answer
```

For the apex domain (web-dev.uk), you should see A records pointing to GitHub's IPs.
For www subdomain, you should see a CNAME record pointing to your GitHub Pages URL.

## Step 5: Check GitHub Pages Status

1. Go to your repository's Settings > Pages
2. Look for any error messages or warnings
3. If you see the InvalidDNSError, wait 24 hours and try again

## Troubleshooting

1. **DNS Propagation**: Changes can take 24-48 hours to fully propagate
2. **Check CNAME Format**: Make sure it contains ONLY your domain name with no trailing spaces
3. **Confirm IPs**: GitHub occasionally updates their IPs, check their docs for the latest ones
4. **Domain Provider Restrictions**: Some providers have special requirements for apex domains
5. **Try Alternate Name**: If web-dev.uk doesn't work, try www.web-dev.uk as your primary domain

## Additional Resources

- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

## Verify DNS Configuration

After configuring DNS records, they may take up to 24 hours to propagate.

You can verify DNS configuration using:
```
dig web-dev.uk +noall +answer
dig www.web-dev.uk +noall +answer
```

## Check DNS Propagation

You can check DNS propagation status at:
- https://www.whatsmydns.net/
- https://dnschecker.org/

## GitHub Pages Settings

In your repository settings, under "Pages":
1. Select "Deploy from a branch" as the source
2. Choose "gh-pages" as the branch
3. Enter your custom domain "web-dev.uk"
4. Click "Save"
5. Optionally, enable "Enforce HTTPS" after DNS propagation is complete
