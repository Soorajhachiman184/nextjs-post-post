/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import pool from '../../db';

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  hire_date: string;
  salary: number;
};

// Function to fetch employee by ID
// export async function fetchEmployeeById(id: number): Promise<Employee | null> {
//   try {
//     const res = await pool.query('SELECT * FROM employees WHERE id = $1', [id]);
//     if (res.rows.length === 0) {
//       return null;  // Return null if no employee found
//     }
//     return res.rows[0];  // Return the employee
//   } catch (err) {
//     console.error('Database query failed:', err);
//     throw new Error('Failed to fetch employee');
//   }
// }

// GET method to fetch employees (with or without id)
// export async function GET(request: Request) {
//   const id = new URL(request.url).searchParams.get('id'); 

//   if (id) {
//     return fetchEmployeeById(Number(id));  // Fetch specific employee by ID
//   } else {
//     // Fetch all employees
//     try {
//       const res = await pool.query('SELECT * FROM employees');
//       return NextResponse.json(res.rows); 
//     } catch (err) {
//       console.error('Database query failed:', err);
//       return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 });
//     }
//   }
// }

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get('id'); 

    // Fetch all employees
    try {
      const res = await pool.query('SELECT * FROM employees');
      return NextResponse.json(res.rows); 
    } catch (err) {
      console.error('Database query failed:', err);
      return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 });
    }
  
}
// POST method remains unchanged
// export async function POST(req: Request) {
//   const { first_name, last_name, hire_date, salary }: Omit<Employee, 'id'> = await req.json();

//   try {
//     const res = await pool.query(
//       'INSERT INTO employees (first_name, last_name, hire_date, salary) VALUES ($1, $2, $3, $4) RETURNING *',
//       [first_name, last_name, hire_date, salary]
//     );
//     return NextResponse.json(res.rows[0], { status: 201 });
//   } catch (err) {
//     return NextResponse.json({ error: 'Failed to add employee' }, { status: 500 });
//   }
// }

export async function POST(req: Request) {
  try {
    const { first_name, last_name, hire_date, salary }: Omit<Employee, 'id'> = await req.json();

    // Validate input
    if (!first_name || !last_name || !hire_date || !salary) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const res = await pool.query(
      'INSERT INTO employees (first_name, last_name, hire_date, salary) VALUES ($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, hire_date, salary]
    );

    return NextResponse.json(res.rows[0], { status: 201 });
  } catch (err: any) {
    console.error('Error adding employee:', err);
    return NextResponse.json({ error: 'Failed to add employee' }, { status: 500 });
  }
}
