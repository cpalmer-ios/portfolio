# DNS Configuration for web-dek.uk

## Option 1: Using an Apex Domain (web-dek.uk)

Add these A records pointing to GitHub Pages' IP addresses:
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

## Option 2: Using a www subdomain (www.web-dek.uk)

Add a CNAME record:
```
CNAME    www    cpalmer-ios.github.io.
```

If you want both the apex domain and www subdomain to work, set up both the A records and the CNAME record.

## Verify DNS Configuration

After configuring DNS records, they may take up to 24 hours to propagate.

You can verify DNS configuration using:
```
dig web-dek.uk +noall +answer
dig www.web-dek.uk +noall +answer
```

## Check DNS Propagation

You can check DNS propagation status at:
- https://www.whatsmydns.net/
- https://dnschecker.org/

## GitHub Pages Settings

In your repository settings, under "Pages":
1. Select "Deploy from a branch" as the source
2. Choose "gh-pages" as the branch
3. Enter your custom domain "web-dek.uk"
4. Click "Save"
5. Optionally, enable "Enforce HTTPS" after DNS propagation is complete
