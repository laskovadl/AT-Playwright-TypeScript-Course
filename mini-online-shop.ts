// We are going to build a small TypeScript program that describes a mini online shop. 
// The goal is to represent a customer, their shopping cart, and calculate the total price. 
 // Steps 

// 1.Create an interface Product with the following fields: 
// name: string  
// price: number  
// category: "food" | "clothes" | "electronics" 
interface Product {
    name: string;
    price: number;
    category: Category;
};

// 2.Create a type Category with the possible categories (food, clothes, electronics) 
type Category = "food" | "clothes" | "electronics";

// 3.Create an interface Customer with the following fields: 
// name: string   
// email: string 
// cart: Product[] — an array containing the products in the customer’s cart 
interface Customer {
    name: string;   
    email:string;
    cart: Product[];
};

// 4. Create two example products (e.g., an apple and a T-shirt). 
const apple: Product = {
    name: "Apple", 
    price: 2, 
    category: "food"
};

const tShirt: Product = {
    name: 'T-Shirt',
    price: 20, 
    category: "clothes",
};

// Add products for electronics
const phone: Product = {
    name: "Nokia", 
    price: 5, 
    category: "electronics"
};

const products: Product[] = [apple, tShirt, phone];

// 5. Create one customer who has both products
const customer: Customer = {
    name: "Mladen Petrov",
    email: "mladen@mail.bg",
    cart: products,
};

// Add second customer
const secondCustomer: Customer = {
    name: "Petia Petrova",
    email: "petia@mail.bg",
    cart: products,
};

// Add function displayCart - 
// display cart owner, customer name and products
// function displayCart(customer: Customer) {

// Add function filterByCategory - 
// receive products and category as parameters 
// and filter the products by given category

// // Add function calculateTotalPrice - 
// // receive customer data and combine all products price
// //hint: customer.cart[0].price
// //hint: customer.cart[1].price
// //...
// //total = summ

export {};