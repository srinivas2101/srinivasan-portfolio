# 🚀 Srinivasan S — Portfolio Website

A premium, modern Full Stack Developer portfolio built with React.js, Vite, Tailwind CSS, and Framer Motion.

---

## 🛠️ Tech Stack

- **Framework:** React.js + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** EmailJS
- **Deployment:** Vercel

---

## 📁 Project Structure

```
src/
├── assets/
│   └── profile.png          # Your profile photo
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Education.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Achievements.jsx
│   ├── Leadership.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── LoadingScreen.jsx
│   ├── ScrollProgress.jsx
│   └── BackToTop.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Setup & Installation

### 1. Install dependencies
```bash
npm install
```

### 2. Setup EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account
2. Create a **Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with these template variables:
   - `{{name}}` — sender's name
   - `{{email}}` — sender's email
   - `{{subject}}` — email subject
   - `{{message}}` — email body
4. Copy your **Service ID**, **Template ID**, and **Public Key**

### 3. Configure environment variables
```bash
cp .env.example .env
```
Edit `.env` and fill in your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### 4. Update personal info
Edit these files to update your details:
- **`src/components/Hero.jsx`** — Name, GitHub/LinkedIn URLs, email
- **`src/components/Contact.jsx`** — Email address, social links
- **`src/components/Footer.jsx`** — Social links, email
- **`src/assets/profile.png`** — Replace with your photo
- Add your `resume.pdf` to the `/public` folder

### 5. Run locally
```bash
npm run dev
```

---

## 🚀 Deploy to Vercel

### Option 1: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Via GitHub (Recommended)
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Add your environment variables in Vercel Dashboard:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Click **Deploy**

---

## 🎨 Customization

| File | What to change |
|------|---------------|
| `tailwind.config.js` | Colors, fonts, animations |
| `src/index.css` | Global styles, CSS variables |
| `src/components/Projects.jsx` | Add/edit your projects |
| `src/components/Skills.jsx` | Update skill levels |
| `src/components/Education.jsx` | Update education details |
| `index.html` | SEO meta tags |

---

## 📦 Build for Production
```bash
npm run build
```

---

Built with ❤️ by Srinivasan S
