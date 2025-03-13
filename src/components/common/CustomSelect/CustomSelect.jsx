import React, { useState, useRef, useEffect } from 'react';
import CustomCheckbox from '../../common/CustomCheckbox/CustomCheckbox';
import CaretDownIcon from '../../icons/CaretDownIcon';
import Button from '../Button/Button';

const CustomSelect = ({
    title = "Тип файлов",
    options = [],
    selectedValues = {},
    onSelectChange,
    onReset, 
    size
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        onSelectChange(name, checked);
    };

    const handleReset = () => {
        onReset();
    };

    // Обработчик клика вне области CustomSelect
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false); // Закрываем выпадающий список
            }
        };

        // Добавляем обработчик при монтировании компонента
        document.addEventListener('click', handleClickOutside);

        // Убираем обработчик при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    
    return (
        <div ref={dropdownRef} className={`relative px-4 pt-[6px] pb-[6px] border border-blueLightPup rounded w-full bg-bluePup 
        ${size === 'small' ? 'md:w-[180px]': 'lg:w-[300px] md:w-[200px]'} `}>
            <div
                className="flex items-center justify-between cursor-pointer gap-2 w-full text-textColor"
                onClick={toggleDropdown}
            >
                <span>{title}</span>
                <CaretDownIcon />
            </div>
            {isOpen && (
                <div className='rounded bg-bluePup p-4 shadow-dropTwilight absolute left-0 right-0 top-[40px] z-10'>
                    <div className="flex flex-col gap-2 mb-4">
                        {options.map((option) => (
                            <CustomCheckbox
                                key={option.value}
                                name={option.value}
                                checked={selectedValues[option.value] || false}
                                handleCheckboxChange={handleCheckboxChange}
                            >
                                {option.icon && <option.icon />}
                                {option.label}
                            </CustomCheckbox>
                        ))}
                    </div>
                    <Button
                        className="w-full"
                        onClick={handleReset}
                        variant='outlined'
                    >
                        Сбросить
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CustomSelect;