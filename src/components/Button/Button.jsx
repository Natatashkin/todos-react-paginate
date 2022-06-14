const Button = ({
  type = 'button',
  title = 'Add Task',
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      className="button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
