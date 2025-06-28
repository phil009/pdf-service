# Receipt Generator API (TypeScript + Express)

This is a simple Node.js API written in TypeScript that generates payment receipts as PDF files.  
Each receipt includes:
- Customer name
- Amount
- Unique receipt ID
- Timestamp of generation
- Embedded QR code (encoding receipt ID + timestamp)

---

## 📦 Features

- PDF generation using [`pdf-lib`](https://www.npmjs.com/package/pdf-lib)
- QR code embedding using [`qrcode`](https://www.npmjs.com/package/qrcode)
- Clean and modular TypeScript structure
- Lightweight and fast (aiming for <100ms p95 response time)
- Fully local — no Docker required
- Docker support for easy deployment

---

## 🚀 Getting Started

### 1. Clone the repo

    git clone https://github.com/phil009/pdf-service.git
    cd pdf_service

##  2. Install dependencies
    npm install
##  3. Run the app (development)
    npm run dev
##  4. Run the app (production)
    npm run build
    npm start
    The server will start on http://localhost:5000

---

## 🐳 Docker Deployment

### Option 1: Using Docker Compose (Recommended)

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Run in detached mode:**
   ```bash
   docker-compose up -d --build
   ```

3. **Stop the service:**
   ```bash
   docker-compose down
   ```

### Option 2: Using Docker directly

1. **Build the Docker image:**
   ```bash
   docker build -t receipt-service .
   ```

2. **Run the container:**
   ```bash
   docker run -p 5000:5000 receipt-service
   ```

3. **Run in detached mode:**
   ```bash
   docker run -d -p 5000:5000 --name receipt-service-container receipt-service
   ```

4. **Stop the container:**
   ```bash
   docker stop receipt-service-container
   docker rm receipt-service-container
   ```

### Docker Configuration

- **Port:** The application runs on port 5000 inside the container and is mapped to port 5000 on your host machine
- **Base Image:** Uses Node.js 18 Alpine for a lightweight container
- **Build Process:** Automatically installs dependencies and builds the TypeScript code
- **Production Ready:** The container runs the built JavaScript code for optimal performance

---

##  🔁 API Usage
    Endpoint: POST /receipt
    Content-Type: application/json

   ## Sample Request Body
    {
    "receiptId": "abc123",
    "name": "Jane Doe",
    "amount": 1500
    }
   ## Sample Response
    Content-Type: application/pdf
    Body: Binary PDF file with receipt details and QR code