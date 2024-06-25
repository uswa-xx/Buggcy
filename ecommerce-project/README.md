# Week 5 Project: eCommerce Project

Project Overview:
The project is a simple e-commerce web application where users can browse products, view product details, add products to their cart, and place orders. The application utilizes the Fake Store API for fetching product data and simulating CRUD operations.

**Technologies Used:**

React: Front-end library for building user interfaces.

SWR: React Hooks library for data fetching.

Axios: Promise-based HTTP client for making API requests.

Zustand: State management library for managing global application state.

useState: React Hook for managing local component state.

useMemo: React Hook for memoizing values.

useCallback: React Hook for memoizing callbacks.

**API to work with:** https://fakestoreapi.com/docs

**Project Structure:**

**Components:**
ProductList: Component to display a list of products fetched from the API.
ProductDetail: Component to display detailed information about a selected product.
Cart: Component to display the user's shopping cart.
OrderForm: Component to simulate placing an order.

**Hooks:**
useProducts: Custom hook for fetching and managing product data using SWR.
useCart: Custom hook for managing the user's shopping cart state using Zustand.

**Pages:**
Home: Landing page displaying the product list.
ProductDetailsPage: Page displaying detailed information about a selected product.
CartPage: Page displaying the user's shopping cart.
CheckoutPage: Page for simulating the checkout process and placing an order.

**Services:**
apiService: Service module for making API requests using Axios.
cartService: Service module for managing the shopping cart state.

**Assessment Tasks:**

Task 1: Fetch Product Data:
Use SWR to fetch product data from the Fake Store API.
Display the list of products on the Home page using the ProductList component.

Task 2: View Product Details:
Implement navigation to a ProductDetailsPage when a product is clicked.
Display detailed information about the selected product using the ProductDetail component.

Task 3: Add to Cart:
Implement functionality to add products to the shopping cart.
Display the current contents of the shopping cart on the Cart page using the Cart component.

Task 4: Manage Cart State:
Use Zustand to manage the global state of the shopping cart.
Implement functions to add, remove, and update items in the cart using the cartService module.

Task 5: Checkout Process:
Create a CheckoutPage to simulate the checkout process.
Display the list of products in the cart and provide a form for entering shipping details.
Implement functionality to simulate placing an order using the OrderForm component.

Task 6: Bonus Task:
Implement CRUD operations for managing products (optional).
Allow users to create, update, and delete products using the Fake Store API.
