import React, { useEffect } from 'react';

interface IShowErrorProps {
  children?: React.ReactNode;
  onHide: () => void;
  delay?: number;
  show: boolean;
}

const ShowError = (props: IShowErrorProps) => {
  const { children, onHide, delay = 5000, show } = props;

  useEffect(() => {
    if (show) {
      const timer = setTimeout(onHide, delay);

      return () => clearTimeout(timer);
    }
  }, [show, delay]);

  return <div>{children}</div>;
};

export default ShowError;
