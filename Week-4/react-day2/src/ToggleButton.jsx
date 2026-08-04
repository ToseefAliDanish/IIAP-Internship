const ToggleButton = ({ isActive, onToggle }) => {
    return (
        <button
        className={isActive ? "btn-active" : "btn-inactive"} 
        onClick={onToggle}
    >
        {isActive ? "Turn System OFF" : "Turn System ON"}
    </button>
    );
};
export default ToggleButton;