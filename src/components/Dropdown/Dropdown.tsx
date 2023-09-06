import React from 'react';
import Select, { StylesConfig } from 'react-select';

type DropdownProps = {
  options: { label: string; value: string }[];
  handleChange: (selectedOption: { label: string; value: string }) => void;
  value: { label: string; value: string };
};

const customStyles: StylesConfig = {
  indicatorSeparator: () => ({ display: 'none' }),
};

export const Dropdown = ({ options, handleChange, value }: DropdownProps) => {
  return (
    <div className="dropdown">
      <Select
        options={options}
        value={value}
        onChange={(selectedOption) => handleChange(selectedOption as any)}
        className="dropdown__select"
        isSearchable={false}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 4,
          colors: {
            ...theme.colors,
            primary50: '#fafbfc',
            primary25: '#fafbfc',
            primary: '#b4bdc3',
          },
        })}
      />
    </div>
  );
};
