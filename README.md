## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 with React
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Authentication**: JWT tokens with localStorage persistence
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Notifications**: React Toastify
## Getting Started

### Frontend Setup

1. Navigate to the web directory:
```bash
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:3000`

## 📊 Database Schema

### Users Table
- `id` (Primary Key)
- `email` (Unique)
- `password` (Hashed)
- `username`
- `role` (admin/buyer/seller)

### Products Table
- `id` (Primary Key)
- `name`
- `description`
- `imagepath`
- `user_id` (Foreign Key)
- `category_name`
- `price`

### Product Categories Table
- `id` (Primary Key)
- `name`
- `description`
- `imagepath`
- `user_id` (Foreign Key)

### Orders Table
- `id` (Primary Key)
- `buyer_id` (Foreign Key)
- `seller_id` (Foreign Key)
- `product_id` (Foreign Key)
- Order details and shipping information

## 🔐 Authentication Flow

1. **Registration**: User signs up with email verification
2. **Email Verification**: Brevo API sends verification code
3. **Login**: JWT token generation and storage
4. **Authorization**: Role-based access control
5. **Token Persistence**: localStorage with expiration handling

## 🛒 E-Commerce Features

- **Product Catalog**: Browse by categories
- **Search & Filter**: Find products easily
- **Shopping Cart**: Persistent cart with quantity management
- **Checkout Process**: Secure order placement
- **Order Tracking**: Real-time order status updates
- **User Dashboards**: Role-specific interfaces

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Real-time feedback
- **Dynamic Navigation**: Context-aware navbar

## 🔧 API Endpoints

### Authentication
- `POST /signup` - User registration
- `POST /verify` - Email verification
- `POST /login` - User login
- `POST /logout` - User logout

### Products
- `GET /getallproducts` - Fetch all products
- `GET /Product/:id` - Get product by ID
- `POST /products/new-product` - Create product (Auth required)
- `PUT /products/update-product/:id` - Update product (Auth required)
- `DELETE /products/delete-product/:id` - Delete product (Auth required)

### Categories
- `GET /getallcategories` - Fetch all categories
- `POST /category/new-category` - Create category (Auth required)

### Orders
- `POST /order/new-order` - Place new order
- `GET /order/buyer-orders/:id` - Get buyer orders
- `GET /order/seller-orders/:id` - Get seller orders

## 🌟 Key Features Implemented

- ✅ User Authentication & Authorization
- ✅ Role-based Access Control
- ✅ Product Management (CRUD)
- ✅ Category Management
- ✅ Shopping Cart Functionality
- ✅ Order Management System
- ✅ Email Verification
- ✅ File Upload for Images
- ✅ Responsive UI Design
- ✅ Error Handling & Validation

## 🚀 Deployment

### Backend Deployment
- Build the Go application
- Set up environment variables
- Configure database
- Deploy to cloud service (AWS, GCP, etc.)

### Frontend Deployment
- Build the Next.js application: `npm run build`
- Deploy to Vercel, Netlify, or similar platform
- Configure environment variables for API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request