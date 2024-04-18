// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = [];
  let wish = true;

  // TODO: Get user input to create and return an array of employee objects
  while (wish) {
    let firstName = window.prompt("enter First Name");
    let lastName = window.prompt("enter Last name");
    let salary = window.prompt("enter Salary");

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary),

    }  
    employees.push(employee);

    wish = confirm(" if you want to add more employee press `OK` if not press `Cancel` ");
  }
  
  return employees;
  
  // sorting employees alphabetically

employees.sort(employees.firstName);
 
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  //  first we calculate the total salary
  let total =0;
  for (i=0; i<employeesArray.length; i++){
    console.log(`${employeesArray[i].salary}`);
    total += (employeesArray[i].salary);
  }
  console.log(total);
// 

   // TODO: Calculate and display the average salary
  const averageSalary = total/ employeesArray.length;
  console.log(`average salary of our ${employeesArray.length} employees is ${averageSalary}`);


}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const random= employeesArray[(Math.floor(Math.random())* (employeesArray.length))];
console.log(random);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
