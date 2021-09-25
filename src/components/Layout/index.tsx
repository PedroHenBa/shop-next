import { ReactNode } from 'react';
import s from './Layout.module.css';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={s.root}>
        <main className="fit">{children}</main>
      </div>
    </>
  );
};

export type LayoutProps = {
  children: ReactNode;
};
