# Aniket Vaghela - Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **Framer Motion**. Features include smooth animations, an AI-powered chatbot using Google Gemini API, and a contact form powered by EmailJS.

## 🚀 Features

- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations** — Powered by Framer Motion
- **AI Assistant** — Google Gemini-powered chatbot that answers questions about me
- **Contact Form** — EmailJS integration for direct messaging
- **Modern UI** — Dark theme with cyan accents, glassmorphism effects
- **Component-Based** — Clean, modular React architecture

## 📂 Project Structure

```
my-portfolio/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── AiChat.jsx
│   ├── data/
│   │   └── config.js    # Portfolio data configuration
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── .env                 # Environment variables
├── package.json
└── vite.config.js
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd my-portfolio
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

**Get your Gemini API key:** [Google AI Studio](https://aistudio.google.com/app/apikey)

### 3. Configure EmailJS

Open `src/components/Contact.jsx` and replace:

```javascript
emailjs.sendForm(
  "YOUR_SERVICE_ID",      // Replace with your EmailJS service ID
  "YOUR_TEMPLATE_ID",     // Replace with your EmailJS template ID
  formRef.current,
  "YOUR_PUBLIC_KEY"       // Replace with your EmailJS public key
)
```

**Setup EmailJS:**
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your public key from the dashboard

### 4. Customize Your Data

Edit `src/data/config.js` to update:
- Personal information
- Skills and percentages
- Projects
- Education history
- Social media links

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 🚀 Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Add environment variable: `VITE_GEMINI_API_KEY`
6. Deploy!

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Add environment variable: `VITE_GEMINI_API_KEY`
6. Deploy!

## 🎨 Technologies Used

- **React** — UI library
- **Vite** — Build tool
- **Framer Motion** — Animations
- **React Icons** — Icon library
- **EmailJS** — Contact form backend
- **Google Gemini API** — AI chatbot
- **CSS3** — Styling with CSS variables

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Aniket Vaghela**
- Enrollment: 12302040701211
- College: MBIT
- Email: aniket@email.com
- GitHub: [github.com/](https://github.com/)
- LinkedIn: [linkedin.com/](https://linkedin.com/)

---

Built with ❤️ by Aniket Vaghela
