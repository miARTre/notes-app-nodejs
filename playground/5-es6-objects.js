// Object property shorthand

const name = "Mire";
let age = 27;

// const user = {
//     name:name,
//     age: age,
// }

// => Shorthand
const user = {
  name,
  age,
};
// output: { name: 'Mire', age: 27 }

console.log(user);

// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  //   rating: 4.2,
};

// const label = product.label;
// const stock = product.stock;

// console.log(label, stock)

// const { label, stock } = product;
// console.log(label);
// console.log(stock);
// console.log(rating);

// const { label: productLabel, stock, rating } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const { label: productLabel, stock, rating = 5 } = product; // only if we don't have a orginal value form objects
console.log(productLabel);
console.log(stock);
console.log(rating); // This works

// console.log(product)

// const transaction = (type, { label, stock }) => {
//   console.log(type, label, stock);
// };

// Default params
const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("Order");
transaction("Order", product);
