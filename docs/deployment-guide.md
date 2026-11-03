
# Harvest Basket - AWS Deployment Guide

## 1. Project Overview

Harvest Basket is a responsive organic farm products business website built using HTML, CSS and JavaScript.

The website is hosted on Amazon S3 and delivered globally using Amazon CloudFront.

## 2. Technology Stack

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- Amazon S3
- Amazon CloudFront
- HTTPS
- Origin Access Control (OAC)

## 3. AWS Infrastructure Details

| Component | Configuration |
|---|---|
| AWS Region | Asia Pacific (Mumbai) |
| Region Code | ap-south-1 |
| S3 Bucket | harvest-basket-website |
| CloudFront Distribution ID | E2YK00A0XHQ5SD |
| CloudFront Domain | d36beskd54mteo.cloudfront.net |
| Default Root Object | index.html |
| Origin Access | Origin Access Control |
| Viewer Protocol Policy | Redirect HTTP to HTTPS |
| AWS WAF | Not enabled |

## 4. Amazon S3 Configuration

1. Created a dedicated S3 bucket named `harvest-basket-website`.
2. Selected the Mumbai AWS region.
3. Kept Block Public Access enabled.
4. Used default S3 encryption.
5. Uploaded the website files:
   - index.html
   - style.css
   - script.js

The S3 bucket remains private. CloudFront accesses the bucket using Origin Access Control.

## 5. CloudFront Configuration

1. Created a CloudFront distribution.
2. Selected the S3 bucket as the origin.
3. Enabled private S3 bucket access through OAC.
4. Selected recommended S3 origin settings.
5. Selected recommended S3 caching settings.
6. Configured the default root object as `index.html`.
7. Enabled HTTPS redirection.
8. Kept AWS WAF disabled.

## 6. HTTPS Configuration

CloudFront provides HTTPS access using its default distribution domain and AWS-managed certificate.

The website was tested using the HTTPS URL.

Live URL:

https://d36beskd54mteo.cloudfront.net

Browser security verification confirmed that the connection is secure.

## 7. CDN and Caching Verification

CloudFront improves website delivery by caching content at its edge locations.

Caching was verified through Chrome Developer Tools:

1. Opened the website.
2. Opened Developer Tools.
3. Selected the Network tab.
4. Inspected the document request.
5. Verified the response header:

`X-Cache: Hit from cloudfront`

This confirms that CloudFront served the requested content from its cache.

## 8. DNS Configuration

The website uses the default CloudFront domain:

`d36beskd54mteo.cloudfront.net`

This domain is automatically provided by AWS and resolves to CloudFront.

A separately purchased custom domain and custom DNS records have not been configured.

## 9. Updating Website Files

To update the website:

1. Modify the source files in the local project.
2. Commit and push changes to GitHub.
3. Upload the updated files to the S3 bucket.
4. If necessary, create a CloudFront invalidation to refresh cached content.

## 10. Security Considerations

- S3 Block Public Access remains enabled.
- CloudFront uses Origin Access Control.
- HTTPS is used for visitor connections.
- Only GET and HEAD methods are required for website delivery.
- AWS WAF was not enabled for this static website deployment.

## 11. Cost Considerations

The CloudFront distribution uses the pay-as-you-go billing model.

S3 storage, CloudFront requests and data transfer may incur charges depending on usage.

AWS billing and usage should be monitored regularly.

## 12. Conclusion

Harvest Basket was successfully deployed using Amazon S3 and Amazon CloudFront.

The deployment demonstrates static website hosting, secure origin access, HTTPS delivery, CDN caching and cloud infrastructure management.

