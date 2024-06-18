class User {
  constructor(username, email) {
    (this.username = username), (this.email = email);
  }

  login() {
    console.log(`${this.username} has logged in`);
  }

  logout() {
    console.log(`${this.username} has logged out`);
  }
}

class Customer extends User {
  constructor(username, email, loyalpoints) {
    super(username, email);
    this.loyalpoints = loyalpoints;
  }

  viewProducts() {
    console.log(`${this.username} has viewed product`);
  }

  addReview(product, review) {
    console.log(`${this.username} reviewed product ${product}: ${review}`);
  }
}

class Admin extends User {
  constructor(username, email) {
    super(username, email);
  }

  deleteUser(user) {
    console.log(`${this.username} delete the user: ${user.username}`);
  }

  addProduct(product) {
    console.log(`${this.username} added the product: ${product}`);
  }
}

//Creating Instance
const customer = new Customer("john_doe", "john@example.com", 100);
const admin = new Admin("admin_user", "admin@example.com");

// Using methods
customer.login(); // Output: john_doe has logged in.
customer.viewProducts(); // Output: john_doe is viewing products.
customer.addReview("Laptop", "Great product!"); // Output: john_doe reviewed Laptop: Great product!
customer.logout(); // Output: john_doe has logged out.

admin.login(); // Output: admin_user has logged in.
admin.addProduct("Smartphone"); // Output: admin_user added product Smartphone.
admin.deleteUser(customer); // Output: admin_user deleted user john_doe.
admin.logout(); // Output: admin_user has logged out.
