import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <Link to='/'>Neo의 Dev. Note</Link>
      </p>
      <nav className={styles.nav}>
        <button>
          <Link to='/todo'>TODO</Link>
        </button>
        <button>
          <Link to='/deposit'>입출금</Link>
        </button>
        <button>
          <Link to='/attend'>출석부</Link>
        </button>
        <button>
          <Link to='/timer'>타이머</Link>
        </button>
      </nav>
    </div>
  )
}

export default Header;