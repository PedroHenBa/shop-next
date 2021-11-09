import { MutableRefObject, ReactNode, useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export type SideBarProps = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

const Sidebar = ({ children, isOpen, handleClose }: SideBarProps) => {
  const container = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (container.current) {
      if (isOpen) {
        disableBodyScroll(container.current);
      } else {
        enableBodyScroll(container.current);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div ref={container} className="fixed inset-0 overflow-hidden h-full z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div
              onClick={() => {
                handleClose();
              }}
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
              <div className="h-full md:w-screen md:max-w-md">
                <div className="h-full flex flex-col text-base bg-accents1 shadow-xl overflow-y-auto">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
