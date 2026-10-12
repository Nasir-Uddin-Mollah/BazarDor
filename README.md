# 🛒 BazarDor — Daily Commodity Market Price Tracker

A modern, high-performance, and responsive market price tracking web application. It offers real-time monitoring of daily grocery prices—including rice, lentils, oil, vegetables, fish, meat, eggs, and spices—alongside daily price fluctuation percentages and comparative pricing across major wholesale and retail markets in Bangladesh.

---

## 🌐 Live Demo & Repository
- **Live Website:** [https://bazardor-gules.vercel.app](https://bazardor-gules.vercel.app)
- **GitHub Repository:** [https://github.com/Nasir-Uddin-Mollah/BazarDor](https://github.com/Nasir-Uddin-Mollah/BazarDor)

---

## ✨ Key Features (5 Main Features)

### 1. 🔴 Real-Time Price Ticker (Marquee Banner)
- Smooth animated ticker continuously displaying live prices and percent changes (▲ price increase / ▼ price decrease) for daily essentials.
- Integrated into the global root layout, remaining visible across all routes and category pages.

### 2. ⚡ Instant Search, Category Filtering & Dynamic Sorting
- Instant real-time search functionality with debounced queries.
- Clean category filtering covering Rice, Lentils, Oil, Vegetables, Fish, Meat, Dairy & Eggs, and Spices with dynamic active tab highlighting.
- Flexible sorting options (Price: Low to High, Price: High to Low, and default price trends).

### 3. 📊 In-Depth Product Analytics & Multi-Market Price Comparison
- Dedicated product details page (`/product/[slug]`) featuring today's price, yesterday's price, percentage change, and average market price.
- Detailed market breakdown comparing prices across major Dhaka markets (Kawran Bazar, Mirpur-1, New Market, Mohammadpur Krishi Market, etc.) with highest and lowest price indicators.

### 4. 🛡️ Secure User Authentication & Profile Management
- Powered by **Better Auth** and **MongoDB** supporting secure email/password signup, sign-in, and one-click Google & GitHub social authentication.
- Persistent session handling with dynamic navbar states (displaying user avatar/name initials and logout) and profile management to update personal information.

### 5. 🎨 Modern Next.js 16 Architecture with Flicker-Free Skeleton Loaders & Custom 404
- Powered by Next.js 16 App Router with Partial Prerendering (PPR) and Turbopack.
- Route-specific skeleton loaders (`loading.tsx`) delivering instantaneous loading UI for the home banner, product grids, category headers, and detailed analytics.
- Polished, responsive custom 404 page (`not-found.tsx`) that gracefully handles invalid slugs and nonexistent products/categories.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16.4 (App Router, Turbopack, Partial Prerendering) |
| **Frontend Library** | React 19 |
| **Styling & UI** | Tailwind CSS v4, HeroUI Components |
| **Authentication** | Better Auth |
| **Database** | MongoDB |
| **Icons & Ticker** | React Icons, React Marquee Text |
| **Feedback / Toasts**| React Toastify |
| **Deployment** | Vercel |

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/Nasir-Uddin-Mollah/BazarDor.git
cd BazarDor
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` or `.env.local` file in the root directory and add the following variables:
```env
BETTER_AUTH_SECRET=your_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string

# Social OAuth Providers (Google & GitHub)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Project Directory Structure

```
bazardor/
├── public/                 # Static assets and images
├── src/
│   ├── Types/              # TypeScript types and interfaces
│   ├── app/                # Next.js App Router
│   │   ├── (auth)/         # Sign-in, Sign-up, and Profile routes
│   │   ├── api/auth/       # Better Auth API endpoints
│   │   ├── category/       # Category page and category loading.tsx
│   │   ├── product/        # Product detail page and product loading.tsx
│   │   ├── layout.tsx      # Root layout (Marquee, Category navigation, Footer)
│   │   ├── loading.tsx     # Root/Homepage skeleton loader
│   │   ├── not-found.tsx   # Custom 404 Not Found page
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable UI components & Skeleton loaders
│   └── lib/                # Auth client and database connection
└── README.md
```

---

## 👨‍💻 Author
- **Nasir Uddin Mollah**
- GitHub: [@Nasir-Uddin-Mollah](https://github.com/Nasir-Uddin-Mollah)
