'use client';
import React, { createContext } from 'react';
import { Employee } from '../models/employee';

export type EmployeeListContextType = {
  employeeList: Employee[];
  setEmployeeList: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export const EmployeeListContext = createContext({});

export default function EmployeeListContextProvider({ children }: any) {
  const [employeeList, setEmployeeList] = React.useState<Employee[]>([]);

  return (
    <EmployeeListContext.Provider value={{ employeeList, setEmployeeList }}>
      {children}
    </EmployeeListContext.Provider>
  );
}