// Define the product data for the Furniture category
const furnitureData = [  { name: "Sofa", price: 599.99 },  { name: "Armchair", price: 299.99 },  { name: "Coffee Table", price: 149.99 },  { name: "Side Table", price: 89.99 },  { name: "TV Stand", price: 299.99 },  { name: "Bookshelf", price: 199.99 },  { name: "Dining Table", price: 499.99 },  { name: "Dining Chair", price: 79.99 },  { name: "Bar Stool", price: 99.99 },  { name: "Bench", price: 149.99 }];

// Get the main container element to add the products
const main = document.querySelector('main');

// Generate the HTML for the product grid
let html = '';
furnitureData.forEach(product => {
  html += `
    <section>
      <img src="https://via.placeholder.com/400x400.png?text=${product.name}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>$${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </section>
  `;
});

// Add the HTML to the main container
main.innerHTML = html;
