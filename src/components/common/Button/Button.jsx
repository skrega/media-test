
const Button = ({ children, onClick, variant, className }) => {
    return (
        <button
            className={`flex items-center justify-center pt-[6px] pb-[7px] px-4 rounded-md font-bold
                ${variant=== 'contained' && 'bg-primary shadow-button'}
                ${variant=== 'outlined' && 'border border-primary text-primary'}
                ${className}`}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;