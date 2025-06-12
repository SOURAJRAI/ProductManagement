# Product Management API

A Node.js Express API for managing products with MongoDB. Supports scraping, CRUD operations, filtering, and sorting.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

```bash
git clone <your-repo-url>
cd ProductManagement
npm install
```

### Environment

```
MONGO_URI=mongodb://localhost:27017/Products
PORT=4000
```

### Running the Server

```bash
node index.js
```

You should see:
```
Server is running on the port 4000
```

---

## API Endpoints

Base URL: `http://localhost:4000/api/products`

| Method | Endpoint                        | Description                |
|--------|---------------------------------|----------------------------|
| GET    | `/getProducts`                  | Get all products           |
| GET    | `/getProductById/:id`           | Get product by ID          |
| POST   | `/addProduct`                   | Add a new product          |
| PUT    | `/updateProduct/:id`            | Update a product by ID     |
| DELETE | `/deleteProduct/:id`            | Delete a product by ID     |

---

## Postman Collection

You can test all endpoints using the following Postman collection:  
[Product Management API Postman Collection](https://www.postman.com/descent-module-saganist-65920185/myworkspace/collection/gj05pkn/product-management?action=share&creator=45800770)

---

