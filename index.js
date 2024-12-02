// Write your solution in this file!
// Initialize employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Non-destructive function to update an employee's property
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Create and return a new object
  }
  
  // Destructive function to update an employee's property
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Mutate the original object
    return employee;
  }
  
  // Non-destructive function to delete an employee's property
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee; // Exclude the key
    return newEmployee; // Return the modified object
  }
  
  // Destructive function to delete an employee's property
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Mutate the original object
    return employee;
  }
  