const Button = ({ type = 'button', title = 'Button', disabled = false }) => {
  return (
    <button className="button" type={type} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
