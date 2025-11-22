
# AgriHub - Agricultural Management Platform

A complete, production-ready frontend for agricultural management built with React, TypeScript, and TailwindCSS.

## 🚀 Features

### Core Modules
- **User Management**: Login, Register, Profile, Settings
- **Dashboard**: Overview with stats, quick actions, and recent activity
- **Marketplace**: Product browsing, search, cart, checkout, order tracking
- **Livestock Management**: Track animals, health status, feeding logs, growth charts
- **Crop Management**: Monitor crops, growth stages, soil conditions, activities
- **ML Tools**: Disease detection, growth prediction, soil analysis, yield forecasting
- **Logistics**: Delivery tracking, rider management, parcel monitoring

### Design Features
- Clean, modern UI inspired by izzieshop.co.ke
- Mobile-first responsive design
- Professional agricultural theme (emerald greens, neutral grays)
- Smooth animations and transitions
- Accessible components with proper ARIA labels

## 📦 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **TailwindCSS** for styling
- **React Router v6** for navigation
- **Lucide React** for icons
- **Recharts** for data visualization
- **Axios** for API calls

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Sidebar, Footer
│   ├── ui/              # Reusable UI components
│   └── marketplace/     # Domain-specific components
├── pages/
│   ├── auth/           # Login, Register, Forgot Password
│   ├── marketplace/    # Marketplace pages
│   ├── livestock/      # Livestock management
│   ├── crops/          # Crop management
│   └── ml/             # ML feature UIs
├── types/              # TypeScript interfaces
├── utils/              # API services, mock data, helpers
├── App.tsx             # Main app with routing
└── index.css           # Global styles
```

## 🎨 Design System

### Colors
- Primary: Emerald (#10b981)
- Background: Gray-50 (#f9fafb)
- Text: Gray-900 (#111827)
- Borders: Gray-200 (#e5e7eb)

### Typography
- Font Family: Inter
- Headings: 600-700 weight
- Body: 400-500 weight

### Spacing
- Consistent 4px grid system
- Component padding: p-4, p-6
- Section gaps: gap-4, gap-6

## 🔌 API Integration

All API calls are structured in `src/utils/api.ts` with placeholder endpoints. To connect to a real backend:

1. Set `VITE_API_URL` in `.env`:
```env
VITE_API_URL=https://your-api-url.com/api
```

2. Update API endpoints in `api.ts` as needed

3. The app uses Axios with automatic token injection from localStorage

## 🧪 Mock Data

Mock data is provided in `src/utils/mockData.ts` for:
- Products
- Livestock
- Crops
- Orders

Replace with real API calls when backend is ready.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔐 Authentication

- Login redirects to `/dashboard`
- Token stored in localStorage
- Protected routes check for token
- Logout clears token and redirects to `/auth/login`

## 🎯 Key Pages

### Dashboard (`/dashboard`)
- Stats overview
- Quick actions
- Recent orders
- Health alerts

### Marketplace (`/marketplace`)
- Product grid with search and filters
- Product details with cart functionality
- Shopping cart and checkout flow

### Livestock (`/livestock`)
- Animal list with health status
- Add/edit livestock forms
- Individual animal details with growth charts

### Crops (`/crops`)
- Crop field list
- Add/edit crop forms
- Growth stage tracking

### ML Tools
- Disease Detection (`/ml/disease-detection`)
- Growth Prediction (`/ml/livestock-growth`)
- Soil Analysis (`/ml/soil-analysis`)
- Yield Forecast (`/ml/yield-forecast`)

## 🚢 Deployment

### Build
```bash
npm run build
```

The `dist/` folder contains the production build ready for deployment.

### Deploy to Vercel/Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables if needed

## 📄 License

This project is built for AgriHub and is proprietary.

## 🤝 Contributing

This is a complete frontend implementation. For backend integration:
1. Update API endpoints in `src/utils/api.ts`
2. Replace mock data with real API calls
3. Add proper error handling
4. Implement real authentication flow

## 📞 Support

For questions or issues, contact the development team.
