import { ComponentType, ReactNode, HTMLAttributes } from 'react';

export const Container = ({ children, el: Component = 'div' as any }: ContainerProps) => {
  return <Component className="px-6 mx-auto max-w-8xl">{children}</Component>;
};

export type ContainerProps = {
  children: ReactNode;
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
};
