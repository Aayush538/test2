# Gifts by Krivya — Love Across Miles 💝

A static boutique gifting website. No backend, no database, no build step required.  
All order/enquiry/review data is submitted to a Google Sheet via a Google Apps Script Web App endpoint.

---

## Project Structure

```
Gift/
├── index.html          ← Main single-page site (all sections)
├── terms.html          ← Standalone Terms & Conditions page
├── css/
│   └── style.css       ← All styles (no framework, no Tailwind)
├── js/
│   └── script.js       ← All logic (cart, forms, API calls, rendering)
├── images/             ← Product photos, QR codes, delivery gallery photos
│   ├── product-*.jpg   ← Product images (replace placeholders with real photos)
│   ├── esewa-qr.jpg    ← eSewa payment QR code
│   ├── laxmi-bank-qr.jpg ← Laxmi Sunrise Bank QR code
│   └── delivery-*.jpg  ← Past delivery/gallery photos
└── README.md           ← This file
```

## How to Run Locally

**No Node.js, npm, or build tools are needed.**

1. Open `index.html` in any modern browser (double-click the file, or use VS Code Live Server, or `python -m http.server`).
2. Everything works client-side. The Google Sheet endpoint is already live.

## How to Deploy (Free)

Upload all files to any free static host:
- **GitHub Pages** — push to a repo, enable Pages in Settings
- **Netlify** — drag-and-drop the project folder
- **Cloudflare Pages** — connect your Git repo
- **Vercel** — import project (static mode)

No build command needed. Just serve the files as-is.

---

## Where to Edit Things

| What to change | Where to edit | Notes |
|---|---|---|
| **Prices** | `js/script.js` → `PRODUCTS` array | Each product has `priceAUD` and `priceNPR` |
| **Currency** | Currently only AUD and NPR supported | Toggle is in the header |
| **Product photos** | `images/product-*.jpg` + update `image` field in `PRODUCTS` | Replace placeholder images |
| **QR code images** | `images/esewa-qr.jpg`, `images/laxmi-bank-qr.jpg` | Update `PAYMENT_IMAGES` in `script.js` if filenames change |
| **WhatsApp number** | `js/script.js` → `CONTACT.whatsappNumber` | Include country code, no `+` or spaces |
| **Contact email** | `js/script.js` → `CONTACT.email` | Used in footer links, error fallbacks |
| **Franchise email** | `js/script.js` → `CONTACT.franchiseEmail` | Currently a placeholder (`test@gmail.com`) |
| **Google Sheet endpoint** | `js/script.js` → `SHEET_API_URL` | Only change if you redeploy the Apps Script |
| **Occasion options** | `js/script.js` → `OCCASIONS` array | Dropdown in the order form |
| **Reviews** | `js/script.js` → `REVIEWS` array | Set `isPlaceholder: false` for real reviews |
| **Gallery photos** | `images/delivery-*.jpg` + update `GALLERY_IMAGES` in `script.js` | Replace with real delivery photos |
| **Terms & Conditions** | `terms.html` | Edit directly in the HTML |
| **Gift meanings** | `js/script.js` → `GIFT_MEANINGS` array | Icons, titles, descriptions |

---

## Known V1 Limitations

- **No login / user accounts** — anyone with the URL can place orders
- **No live payment verification** — the site trusts user-reported payment reference numbers; manual verification needed
- **No admin dashboard** — the Google Sheet IS the admin view (Orders, Enquiries, Feedback tabs)
- **Only NPR and AUD currencies** — toggle in header; other currencies not yet supported
- **No product filtering / categories** — all products shown in a single grid
- **No SMS notifications** — only WhatsApp and email fallback links
- **Payment screenshots stored as base64** — not uploaded to a file server; may truncate in the Sheet cell

## Dependencies

**None.** Zero npm packages, zero CDN libraries (except Google Fonts via CSS `@import`).  
Pure HTML + CSS + vanilla JavaScript.
