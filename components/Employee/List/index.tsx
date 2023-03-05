'use client';
import React, { useEffect } from 'react';
import { EmployeeListContext } from '@/contexts/EmployeeListContext';
import { EmployeeListContextType } from '@/contexts/EmployeeListContext';
import Card from '@/components/Employee/Card';

type SortVoteType = {
  vote: number;
}

export default function EmployeeList({ children, ...rest }: any) {
  const { employeeList, setEmployeeList } = React.useContext(EmployeeListContext) as EmployeeListContextType;

  useEffect(() => {
    setEmployeeList(
      rest.employees.sort((a: SortVoteType, b: SortVoteType) => b.vote > a.vote ? 1 : -1),
    );
  }, [rest.employees, setEmployeeList]);

  return (
    <div className='container'>
      <div className='row p-0'>
        {employeeList.map((employee) => (
          <Card key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}