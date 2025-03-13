// Write your solution in this file!
// Declare a global variable customerName
var customerName = "bob";

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = "not bob"; // Implicit global variable (not recommended in real projects)
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = "someone";

// Function to attempt changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "someone else"; // This will throw an error because constants cannot be reassigned
}