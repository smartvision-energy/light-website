# Smart Vision Website Prototype

Static, English-only prototype for `www.smart-vision.be`.

## What is included

- One-page credibility website in plain HTML, CSS, and JavaScript.
- Lightweight visual identity with a modernised SVG mark.
- Optimised Yves Langer portrait asset.
- Contact hub with booking, email, phone, LinkedIn, address, vCard, and `meeting.smart-vision.be` fallback.
- Cloudflare Pages friendly static files. No CMS, backend, database, build step, or dependency install.

## Local preview

Open `index.html` directly in a browser, or run a tiny local server from this folder:

```sh
python3 -m http.server 8787
```

Then visit:

```text
http://localhost:8787
```

## Before publishing

- Confirm whether the public phone number should remain visible on the website and in `assets/yves-langer.vcf`.
- Confirm whether the public email should remain `info@smart-vision.be` or use a personal Smart Vision address.
- Confirm whether the postal address should remain visible in the contact hub.
- Confirm the LinkedIn profile URL.
- Confirm whether the vCard should include the phone number.
- Replace or refine the logo if Yves prefers to stay closer to the historical power-button identity.
- Add a resources or brand-kit section later only when there is real material to publish.
- Do not change DNS until the local prototype is approved.

## Deployment direction

Cloudflare Pages can host this folder as a static site. The production domain should be `www.smart-vision.be`; email DNS records for Google Workspace must remain untouched.
