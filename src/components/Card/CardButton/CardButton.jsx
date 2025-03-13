const CardButton = ({ children, onClick }) => {
    return (
        <button className="flex justify-center items-center w-6 h-6 rounded shadow-card border-blueLightPup bg-blueSpace border"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default CardButton;