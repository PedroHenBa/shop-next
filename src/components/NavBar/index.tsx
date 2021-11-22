import { Container } from '@components/ui/Container';
import Link from 'next/link';
import styles from './NavBar.module.css';
import { UserNav } from '@components/UserNav';

export const NavBar = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={styles.logo}>NEXT_STORE</a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={styles.link}>All</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Clothes</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Accessories</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Shoes</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <UserNav />
          </div>
        </div>
      </div>
    </Container>
  );
};
