import styles from './UserNav.module.css';
import Link from 'next/link';
import { Bag as Cart, Heart } from '@components/icons';
import { useUi } from '@components/ui/UiContext';

export const UserNav = () => {
  const ui = useUi();

  const handleCart = () => {
    ui.openSidebar();
  };

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item} onClick={handleCart}>
          <Cart />
        </li>
        <li className={styles.item}>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
