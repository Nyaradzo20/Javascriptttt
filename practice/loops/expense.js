
// Prompt user for monthly income and convert input to number
let income = Number(prompt("Enter your monthly income:"));

// Prompt user for fixed expenses (like rent, electricity, etc.)
let fixed = Number(prompt("Enter your fixed expenses (e.g. rent):"));

// Initialize total for variable expenses (like groceries, transport, etc.)
let totalVariable = 0;

// Start loop for entering multiple variable expenses
let more = "yes";

while (more.toLowerCase() === "yes") {
  // Ask user to name the variable expense (e.g., groceries)
  let name = prompt("Enter variable expense name (e.g. groceries):");
  
  // Ask user for the amount for the named variable expense
  let amount = Number(prompt("Enter amount for " + name + ":"));
  
  // Add the entered amount to total variable expenses
  totalVariable += amount;
  
  // Ask if user wants to add another variable expense
  more = prompt("Do you want to add another variable expense? YES/NO");
}

// Add fixed and variable expenses to get total monthly expenses
let totalExpenses = fixed + totalVariable;

// Subtract total expenses from income to get remaining budget
let remaining = income - totalExpenses;

// Display the result to the user
alert("Total expenses: R" + totalExpenses + "\nRemaining budget: R" + remaining);
