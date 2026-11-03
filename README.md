
# 🌿 Harvest Basket – Fresh From Farm to Home

A responsive organic farm products business website built using HTML, CSS and JavaScript, hosted on Amazon S3 and delivered through Amazon CloudFront.

## 🌱 Project Overview

Harvest Basket is a modern business landing website that showcases fresh vegetables, seasonal fruits and farm spices.

The website provides a clean, user-friendly experience across desktop and mobile devices.

## 🚀 Live Website

**Website:** https://d36beskd54mteo.cloudfront.net

## ✨ Features

- Responsive website design
- Modern green and cream colour theme
- Home, About, Products and Contact sections
- Product showcase with images
- Interactive product cards
- Smooth navigation
- Mobile-friendly layout
- HTTPS-enabled website delivery
- CloudFront CDN caching

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Interactive functionality |
| Git | Version control |
| GitHub | Source code management |
| Amazon S3 | Static website file storage |
| Amazon CloudFront | CDN and secure content delivery |

## ☁️ AWS Architecture

The website uses Amazon S3 as its private storage origin and Amazon CloudFront for global content delivery.

**Architecture flow:**

GitHub → Amazon S3 → CloudFront → Website Visitors

CloudFront accesses the private S3 bucket using Origin Access Control (OAC).

View the detailed architecture diagram:

[Architecture Diagram](docs/architecture.md)


## 📁 Project Structure

```text
veda-day34_harvest-basket-website/
│
├── index.html
├── style.css
├── script.js
│
├── docs/
│   ├── architecture.md
│   └── deployment-guide.md
│
├── screenshots/
│   ├── 01-homepage.png
│   ├── 02-about.png
│   ├── 03-products.png
│   ├── 04-contact-footer.png
│   ├── 05-mobile-responsive.png
│   ├── 06-s3-bucket-created.png
│   ├── 07-s3-website-files-uploaded.png
│   ├── 08-cloudfront-distribution-created.png
│   ├── 09-cloudfront-deployment-completed.png
│   ├── 10-cloudfront-live-website.png
│   ├── 11-https-security-verification.png
│   └── 12-cloudfront-cache-hit.png
│
└── README.md
```

## 🔐 Security and Performance

- S3 Block Public Access enabled.
- CloudFront Origin Access Control configured.
- HTTPS access verified.
- HTTP-to-HTTPS redirection configured.
- CDN caching verified using the `X-Cache: Hit from cloudfront` response header.

## 🧪 Testing

The following tests were performed:

- Desktop layout verification
- Mobile responsiveness testing
- Navigation testing
- Product card interaction testing
- Contact link testing
- Browser console verification
- HTTPS security verification
- CloudFront caching verification

## 📖 Documentation

- [AWS Deployment Guide](docs/deployment-guide.md)
- [AWS Architecture Diagram](docs/architecture.md)

## 🌍 DNS Configuration

The website uses the default CloudFront domain.

A separately purchased custom domain and custom DNS records have not been configured.

## 💰 Cost Considerations

AWS S3 and CloudFront operate under usage-based billing. Actual costs depend on storage, requests and data transfer.

AWS billing should be monitored regularly.



