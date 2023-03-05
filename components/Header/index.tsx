'use client';
import styles from './style.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <header id={styles.header}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className={styles.headerTitle}>
              <Link href='/' id={styles.logo}> DENEME LOGO</Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}