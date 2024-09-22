import { useRef, useState } from 'react';

export interface INameForm {
  firstName: string;
  lastName: string;
}

export const useForm = <T extends Record<string, any>>(form: T) => {
  const [, forceUpdate] = useState({});

  const stateRef = useRef<T>(form);

  const setValue = (key: keyof T, value: T[keyof T]) => {
    stateRef.current[key] = value;
    forceUpdate({});
  };

  return [stateRef.current, setValue] as const;
};
