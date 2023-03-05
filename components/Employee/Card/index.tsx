'use client';
import styles from './style.module.scss';
import { Employee } from '@/models/employee';
import React from 'react';
import Image from 'next/image';
import { AiFillTag, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';
import { BiUpvote } from 'react-icons/bi';
import { EmployeeListContext, EmployeeListContextType } from '@/contexts/EmployeeListContext';

type CardPropsType = {
  employee: Employee;
}

const Card: React.FC<CardPropsType> = ({ employee }) => {
  const { employeeList, setEmployeeList } = React.useContext(EmployeeListContext) as EmployeeListContextType;

  const voteHandler = (id: number) => {
    const newEmployeeList = employeeList.map((employee) => {
      if (employee.id === id) {
        return {
          ...employee,
          vote: employee.vote + 1,
        };
      }
      return employee;
    });

    newEmployeeList.sort(function (a, b) {
      return b.vote - a.vote;
    });

    setEmployeeList(newEmployeeList);
  };

  return (
    <div className={`col-4 ${styles.card}`}>
      <div className={styles.cardBody}>
        <Image
          src={employee.image}
          width={100}
          height={100}
          alt={employee.fullName}
          className={styles.employeeImage}
        />
        <h5 className={styles.employeeName}>
          <Link href={`detail/${employee.id}`}>{employee.fullName}</Link>
        </h5>
        <p className={styles.employeeVoteCount}><BiUpvote /> {employee.vote}</p>
        <ul className={styles.employeeList}>
          <li><AiFillTag /> <b>Job</b> : {employee.job}</li>
          <li><AiOutlinePhone /> <b>Phone</b> : {employee.phone}</li>
          <li><AiOutlineMail /> <b>Email</b> : {employee.email}</li>
        </ul>
        <button className={styles.employeeVoteBtn} onClick={() => voteHandler(employee.id)}>
          <FaPaperPlane /> Oy Ver
        </button>
      </div>
    </div>
  );
};

export default Card;