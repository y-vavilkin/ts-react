import { IOption } from "../interfaces";

interface ISelectProps {
  name?: string;
  labelKey?: keyof IOption;
  valueKey?: keyof IOption;
  options: IOption[];
  selected?: IOption | null;
  onChange: (selectedOption: IOption | null, event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = (props: ISelectProps) => {
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
          {item[labelKey]}
        </option>
      ))}
    </select>
  );
};

export default Select;
