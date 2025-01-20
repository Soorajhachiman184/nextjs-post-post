// // import { fetchEmployeeById } from '../../api/employees/route';  // Import the utility function

// type Employee = {
//   id: number;
//   first_name: string;
//   last_name: string;
//   hire_date: string;
//   salary: number;
// };

// export default async function EmployeePage({ params }: { params: { id: string } }) {
//   const id = parseInt(params.id); // Get the ID from the URL params

//   // Fetch the employee data, explicitly typing it as Employee | null
//   const employee: Employee | null = await fetchEmployeeById(id);

//   if (!employee) {
//     return <div>Employee not found.</div>;
//   }
//   const hireDate = new Date(employee.hire_date);
//   const formattedHireDate = hireDate.toLocaleDateString(); 
//   return (
//     <div>
//       <h1>Employee Details</h1>
//       <p>First Name: {employee.first_name}</p>
//       <p>Last Name: {employee.last_name}</p>
//       <p>Date of Hire: {formattedHireDate}</p>
//       <p>Salary: ${employee.salary}</p>
//     </div>
//   );
// }
