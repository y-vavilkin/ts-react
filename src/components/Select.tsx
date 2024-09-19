import React from 'react';

import { IOptionWithLabel, IOptionWithName} from '../interfaces';

interface ISelectProps<T> {
  name?: string;
  labelKey?: keyof T;
  valueKey?: keyof T;
  options: T[];
  selected: T | null;
  onChange: (selectedOption: T | null, event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = <T extends IOptionWithName | IOptionWithLabel>(props: ISelectProps<T>) => {
  const {
    name = '',
    labelKey = 'name' as keyof T,
    valueKey = 'value' as keyof T,
    options,
    selected,
    onChange,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const option = options.find((item) => item[valueKey] === value) ?? null;
    onChange(option, event);
  };

  return (
    <select name={name} onChange={handleChange}>
      <option defaultValue={selected?.value} value="empty">
        Select option
      </option>
      {options.map((item) => (
        <option
          key={item.id}
          value={String(item[valueKey])}
          defaultValue={selected?.value}
        >
          {String(item[labelKey])}
        </option>
      ))}
    </select>
  );
};

export default Select;
