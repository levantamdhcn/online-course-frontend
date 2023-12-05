import React from 'react';
import { MultiSelect } from 'react-multi-select-component';

const FilterDropdown = ({ label, options, value, onChange }) => {
  return (
    <div>
      <MultiSelect
        overrideStrings={{
            selectSomeItems: label,
            search: 'Tìm kiếm',
            allItemsAreSelected: 'Bạn đã chọn tất cả'
        }}
        hasSelectAll={false}
        options={options}
        value={value}
        onChange={onChange}
        labelledBy={label}
        className="react-multiple-select"
      />
    </div>
  );
};

export default FilterDropdown;
