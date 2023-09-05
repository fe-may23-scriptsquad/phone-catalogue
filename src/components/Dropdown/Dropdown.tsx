type DropdownProps = {
  options: string[];
  handleChange:
  (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

export const Dropdown = ({
  options,
  handleChange,
  value,
}:DropdownProps) => {
  return (
    <div className="dropdown">
      <select
        value={value}
        onChange={handleChange}
        className="dropdown__select"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
