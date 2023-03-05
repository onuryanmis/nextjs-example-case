import styles from './style.module.scss';
import { Employee } from '@/models/employee';
import React from 'react';
import { AiFillTag, AiOutlineMail, AiOutlineUser, AiTwotonePhone } from 'react-icons/ai';

type DetailPageContainerPropsType = {
  employee?: Employee;
}

const DetailPageContainer: React.FC<DetailPageContainerPropsType> = ({ employee }) => {
  return (
    <div className={`container ${styles.detailPageContainer}`}>
      <div className='row'>
        <div className='col-12'>
          <h1>#{employee?.id} - {employee?.fullName} adlı çalışanın profili</h1>
          <hr />
          <ul>
            <li><b><AiOutlineUser /> Adı Soyad:</b> {employee?.fullName} test</li>
            <li><b><AiTwotonePhone /> Telefon</b>: {employee?.phone} test</li>
            <li><b><AiOutlineMail /> E-mail</b>: {employee?.email} test</li>
            <li><b><AiFillTag /> Mesleği</b>: {employee?.job} test</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPageContainer;