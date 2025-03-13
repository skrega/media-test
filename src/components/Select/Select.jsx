import React from 'react';
import './Select.css'; // Импортируем CSS файл для стилей

const Select = ({ options, onChange, value, size }) => {
    return (
        <div className={`custom-select  ${size === 'large' ? 'w-[300px]' : 'w-[180px]'}`}>
            <select
                className="w-full border border-blueLightPup outline-none rounded bg-bluePup shadow-dropTwilight
                text-textColor px-4 pt-[6px] pb-[5px]"
                onChange={onChange}
                value={value}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select; 