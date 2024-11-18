
# **E-Commerce Dashboard**

This is a feature-rich, responsive e-commerce dashboard built with Angular. The application allows users to browse products, filter and sort them, and view detailed product information dynamically in a modal.

---

## **Features**

- **Product Listing**: Displays a grid of products with responsive design.
- **Filters**: Filter products by category, price range, and rating.
- **Sorting**: Sort products by price (low-to-high or high-to-low).
- **Dynamic Data Loading**: Supports infinite scrolling for product listing.
- **Product Details Modal**: View additional product details dynamically in a modal.
- **Performance Optimized**: Loads product details on demand to ensure optimized performance.

---

## **Getting Started**

### **Prerequisites**

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [Angular CLI](https://angular.io/cli) (version 15 or higher)

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-dashboard.git
   cd ecommerce-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4200/
   ```

---

## **File Structure**

```
src/
├── app/
│   ├── components/
│   │   ├── filter-bar/
│   │   ├── product-card/
│   │   ├── product-modal/
│   │   ├── dashboard/
│   ├── models/
│   ├── services/
│   ├── app.module.ts
├── assets/
│   └── images/   # Placeholder images for products
```

---

## **Usage**

### **Filters and Sorting**

- Use the **Filter Bar** to filter products by:
  - Category (e.g., Electronics, Furniture)
  - Price Range

- Use the **Sort By** dropdown to sort products:
  - **Price: Low to High**
  - **Price: High to Low**

### **Viewing Product Details**

1. Click on a product card to open the **Product Details Modal**.
2. The modal will display:
   - Product description
   - Availability
   - Detailed image
   - Price

---

## **APIs**

Ensure your backend API supports the following endpoints:

1. **Get Products**:
   ```
   GET /products
   Query Params: category, minPrice, maxPrice, rating, sort, page
   ```

2. **Get Product Details**:
   ```
   GET /products/:id
   ```
---

## **Technologies Used**

- **Frontend**: Angular 16, TypeScript
- **Styling**: SCSS, Flexbox, CSS Grid
- **HTTP**: Angular `HttpClient` for API communication
- **RxJS**: For reactive programming and state management

---

## **Optimizations**

- **Lazy Loading**: Product details are fetched only when needed.
- **Responsive Design**: Adaptable layout for various screen sizes.
- **Efficient State Management**: Uses RxJS for seamless filtering, sorting, and infinite scrolling.

---

## **Future Enhancements**

- Add user authentication and authorization.
- Include cart functionality and checkout process.
- Implement real-time product updates with WebSockets.
- Add a dark mode toggle.

---

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

--- DEEPESH GUPTA