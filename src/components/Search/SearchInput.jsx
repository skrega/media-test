import SearchIcon from "../icons/SearchIcon";

const SearchInput = ({ placeholder }) => {
    return (
        <div className="relative md:w-[340px] w-full">
            <SearchIcon className='absolute top-[10px] left-4' />
            <input className="pl-[38px] pr-4 pt-[6px] pb-[5px] w-full bg-bluePup outline-none rounded-md 
                placeholder:text-textColor text-white shadow-dropTwilight border border-blueLightPup"
                type="search"
                placeholder={placeholder}
            />
        </div>);
}

export default SearchInput;
