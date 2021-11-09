import { ReactNode } from 'react';
import s from './Layout.module.css';
import { Footer } from '@components/Footer';
import { NavBar } from '@components/NavBar';
import Sidebar from '@components/ui/Sidebar';
import CartSidebar from '@components/cart/CartSidebar';
import { useUi } from '@components/ui/UiContext';

export const Layout = ({ children }: LayoutProps) => {
  const ui = useUi();

  return (
    <>
      <div className={s.root}>
        <NavBar />
        <Sidebar isOpen={ui.isSidebarOpen} handleClose={ui.closeSidebar}>
          <CartSidebar />
        </Sidebar>
        <main className="fit">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export type LayoutProps = {
  children: ReactNode;
};
