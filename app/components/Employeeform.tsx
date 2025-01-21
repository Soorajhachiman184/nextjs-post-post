/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';

type EmployeeFormProps = {
  onAddEmployee: (employee: any) => void;
};

export default function EmployeeForm({ onAddEmployee }: EmployeeFormProps) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    hire_date: '',
    salary: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const newEmployee = await response.json();
    onAddEmployee(newEmployee);
    setFormData({ first_name: '', last_name: '', hire_date: '', salary: '' }); // Clear form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="hire_date"
        value={formData.hire_date}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Employees List Data</button>
    </form>
  );
}
