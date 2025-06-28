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