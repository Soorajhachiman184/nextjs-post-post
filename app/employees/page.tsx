/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState, useEffect } from 'react';
import EmployeeForm from '@/app/components/Employeeform';

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  hire_date: string;
  salary: number;
};

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('/api/employees');
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const handleAddEmployee = (newEmployee: Employee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees?.map((employee) => (
          <li key={employee.id}>
            {employee.first_name} {employee.last_name}
          </li>
        ))}
      </ul>
      <h2>Add Employee</h2>
      <EmployeeForm onAddEmployee={handleAddEmployee} />
    </div>
  );
}
