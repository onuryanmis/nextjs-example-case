import { gql } from '@apollo/client';
import client from '@/libs/graphql';
import { Employee } from '@/models/employee';

export const getEmployees = async (): Promise<[Employee]> => {
  const { data } = await client.query({
    query: gql`
        query {
            employees {
                id
                image
                vote
                fullName
                phone
                email
                job
            }
        }
    `,
  });

  return data.employees;
};

export const getEmployee = async (id: string): Promise<Employee> => {
  const { data } = await client.query({
    query: gql`
        query {
            employee (id: "${id}"){
                id
                image
                vote
                fullName
                phone
                email
                job
            }
        }
    `,
  });

  return data.employee;
};