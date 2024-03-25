// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  //1-Define an empty object to store employee details.

  let employeesList = [];
  let addEmployee = true;

  while (addEmployee) {
    let employeesInfo = {
      firstName: ``,
      lastName: ``,
      salary: 0,
    };
    //2-Prompt the user to enter employee details.
    //parseFloat will convert the salary entry to a number.
    employeesInfo.firstName = prompt("Enter employee's First Name:").toLocaleLowerCase();
    employeesInfo.lastName = prompt("Enter employee's Last Name:").toLocaleLowerCase();
    employeesInfo.salary = parseFloat(prompt("Enter employee's Salary:"));

    //3- This method will check if the Salary is not a number. If if the case (Salary not a number), it will set he salary to the defaulf value, which will be 0.
    if (isNaN(employeesInfo.salary)) {
      employeesInfo.salary = 0;
    }

    //4- To push/add user entry into the employeesList array.

    employeesList.push(employeesInfo);

    addEmployee = confirm(`Click ok to continue or cancel when you are done.`);
  }

  return employeesList;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary = employeesArray[i].salary + totalSalary;
  }
  const average = totalSalary / employeesArray.length;
  console.log("The Average Salary is: $" + average);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee =
    employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(
    "Random employee is: " + randomEmployee.firstName + ' ' + randomEmployee.lastName
  );
 
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
