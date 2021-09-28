import s from './Grid.module.css';
import { ReactNode } from 'react';
import cn from 'classnames';

export type GridProductsProps = {
  children: ReactNode;
  layout?: 'A' | 'B';
};

export const GridProducts = ({ children, layout = 'A' }: GridProductsProps) => {
  const rootClassesName = cn(s.rootGrid, {
    [s.layoutA]: layout === 'A',
    [s.layoutB]: layout === 'B',
  });

  return <div className={rootClassesName}>{children}</div>;
};
