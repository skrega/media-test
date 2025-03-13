const BasicInput = ({ label, type, placeholder, id,onChange,value, classNameRow }) => {
    return (
        <div className={`items-center ${classNameRow ? classNameRow : 'flex'}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                className="px-4 pt-[6px] pb-[5px] w-full bg-bluePup outline-none rounded-md 
                placeholder:text-textColor text-white shadow-dropTwilight border border-blueLightPup"
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

export default BasicInput;