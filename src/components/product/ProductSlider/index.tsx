import classes from './ProductSlider.module.css';
import { ReactNode } from 'react';

export const ProductSlider = ({ children }: ProductSliderProps) => {
  return (
    <div className={classes.root}>
      <div className="h-full transition-opacity">{children}</div>
    </div>
  );
};

export type ProductSliderProps = {
  children: ReactNode[];
};
