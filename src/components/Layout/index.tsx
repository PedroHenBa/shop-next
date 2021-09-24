import { ReactNode } from 'react';

export const Layout = ({ children }: LayoutProps) => {
  return <div className="Layout">{children}</div>;
};

export type LayoutProps = {
  children: ReactNode;
};
