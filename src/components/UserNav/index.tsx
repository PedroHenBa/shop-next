import styles from './UserNav.module.css';
import Link from 'next/link';
import { Bag as Cart, Heart } from '@components/Icons';

export const UserNav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Cart />
        </li>
        <li className={styles.item}>
          <Link href="/">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
