const ButtonSmall = ({ className, children, onClick }) => {
    return (
        <button className={`flex justify-center items-center p-2 w-8 h-8 bg-bluePup border border-blueLightPup shadow-dropTwilight rounded ${className}`}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonSmall;


