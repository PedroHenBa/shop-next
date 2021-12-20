import classes from './ProductSlider.module.css';
import { ReactNode, Children, isValidElement, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';

export const ProductSlider = ({ children }: ProductSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className={classes.root}>
      <div ref={sliderRef} className="h-full transition-opacity keen-slider">
        <button
          onClick={instanceRef.current?.prev}
          className={cn(classes.rightControl, classes.control)}
        />
        <button
          onClick={instanceRef.current?.next}
          className={cn(classes.leftControl, classes.control)}
        />

        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ''
                } keen-slider__slide`,
              },
            };
          }
          return child;
        })}
      </div>
    </div>
  );
};

export type ProductSliderProps = {
  children: ReactNode[];
};
