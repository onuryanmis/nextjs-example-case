import Card from '@/components/Employee/Card';
import { Employee } from '@/models/employee';
import React from 'react';
import EmployeeList from '@/components/Employee/List';
import EmployeeListContextProvider from '@/contexts/EmployeeListContext';

type HomePageContainerPropsType = {
  employees: Employee[];
}

const HomePageContainer: React.FC<HomePageContainerPropsType> = ({employees}): any => {
  return (
    <EmployeeListContextProvider>
      <EmployeeList employees={employees}>

      </EmployeeList>
    </EmployeeListContextProvider>
  );
};

export default HomePageContainer;