import React from 'react';

import { IOption, IOptionWithLabel, IOptionWithName} from '../interfaces';

interface ISelectProps<T extends IOptionWithName | IOptionWithLabel> {
  name?: string;
  labelKey?: keyof IOptionWithLabel;
  valueKey?: keyof IOption;
  options: T[];
  selected: T | null;
  onChange: (selectedOption: T | null, event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = <T extends IOptionWithName | IOptionWithLabel>(props: ISelectProps<T>) => {
  const {
    name = '',
    labelKey = 'name',
    valueKey = 'value',
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
          value={item[valueKey]}
          defaultValue={selected?.value}
        >
          {item[labelKey as keyof T] as string}
        </option>
      ))}
    </select>
  );
};

export default Select;
