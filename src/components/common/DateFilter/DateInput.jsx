const DateInput = ({ placeholder }) => {
    return (
        <input className="bg-transparent outline-none md:w-[70px] w-[60px] border-none placeholder:text-textColor" type="text" placeholder={placeholder} />
    );
}

export default DateInput;