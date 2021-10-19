import { ReactNode } from 'react';
import s from './Layout.module.css';
import { Footer } from '@components/Foter';
import { NavBar } from '@components/NavBar';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={s.root}>
        <NavBar />
        <main className="fit">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export type LayoutProps = {
  children: ReactNode;
};
