const Button = ({ color, text, onClick }) => {
   return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "green",
  text: "Add",
};
export default Button;
