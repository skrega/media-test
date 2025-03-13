import CheckIcon from "../../icons/CheckIcon";

const CustomCheckbox = ({ children, name, checked, handleCheckboxChange }) => {
    return (
        <label className={`flex items-center justify-between gap-2 px-4 py-2 bg-bluePup cursor-pointer 
        shadow-checkbox border border-blueLightPup rounded-md hover:bg-blueLightPup transition-[background] duration-300
        ${checked && 'border-primary bg-primary/15'}`}>
            <span className="flex items-center gap-2">
                <input
                    className='absolute opacity-0'
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
                {children}
            </span>
            {checked && <CheckIcon />}
        </label>
    );
}

export default CustomCheckbox;
