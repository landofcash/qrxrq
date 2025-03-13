![GitHub last commit](https://img.shields.io/github/last-commit/landofcash/qrxrq)
![GitHub repo size](https://img.shields.io/github/repo-size/landofcash/qrxrq)
![GitHub issues](https://img.shields.io/github/issues/landofcash/qrxrq)
![GitHub pull requests](https://img.shields.io/github/issues-pr/landofcash/qrxrq)


# 🚀 QRXRQ URL Shortener

QRXRQ is an **URL shortening service** that allows users to shorten and manage links efficiently. It features a **React frontend** with **Tailwind CSS** and a **Node.js backend** with **MongoDB** and **Redis** for performance optimization.

## 🌐 Click To Try It 👀
Check out the live demo: [qrxrq.com](https://qrxrq.com)

## 🌟 Features
- Shorten long URLs with a custom incrementing ID approach
- Fast redirection with Redis caching
- User-friendly frontend with dark/light mode
- REST API for URL management
- Secure and scalable architecture
- 404 page is used to redirect to the backend.
  
## 🛠 Tech Stack
### Frontend
- React.js with Vite 
- Tailwind CSS v4
- Vue Router (for routing)
- Headless UI (for UI components)
- **Hosted on GitHub Pages**

### Backend
- Node.js with Express
- MongoDB (Azure Cosmos DB) (primary database)
- Redis (Azure Cache for Redis) (caching layer)
- API for URL creation and retrieval
- **Hosted on Azure Linux F1 SKU**

## 🚀 CI/CD
- **Frontend**: Automated deployment to **GitHub Pages** via GitHub Actions
- **Backend**: Continuous Deployment to **Azure Linux F1 SKU** using GitHub Actions

## 📌 Getting Started

### ✅ Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- MongoDB
- Redis
- Git

### 📥 Installation
#### 🔽 Clone the repository
```sh
git clone https://github.com/landofcash/qrxrq.git
cd qrxrq
```

#### 🏗 Backend Setup
```sh
cd qrxrq-backend
npm install
cp .env.example .env  # Configure your environment variables
npm run dev
```

#### 🎨 Frontend Setup
```sh
cd qrxrq-frontend
npm install
npm run dev
```

## 📡 API Endpoints
| Method | Endpoint     | Description |
|--------|-------------|-------------|
| POST   | /api/shorten | Shorten a URL |
| GET    | /:shortId   | Redirect to the original URL |

## 🚢 Deployment
You can deploy the frontend and backend separately:
- **Frontend**: GitHub Pages (automated via CI/CD)
- **Backend**: Azure Linux F1 SKU (automated via CI/CD)

## 📜 License
This project is POC, licensed under the MIT License.

