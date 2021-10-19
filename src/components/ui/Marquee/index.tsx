import { ReactNode } from 'react';
import styles from './Marquee.module.css';
import Ticker from 'react-ticker';
import cn from 'classnames';

export const Marquee = ({ children, background = 'primary' }: MarqueeProps) => {
  const rootClassName = cn(styles.root, { [styles.secondary]: background === 'secondary' });

  return (
    <div className={rootClassName}>
      <Ticker offset={40}>{() => <div className={styles.container}>{children}</div>}</Ticker>
    </div>
  );
};

export type MarqueeProps = {
  children: ReactNode[];
  background?: 'primary' | 'secondary';
};
