const Button = ({
  type = 'button',
  text = 'Button',
  onClick = () => {},
  ...args
}) => {
  return (
    <button type={type} onClick={onClick} {...args}>
      {text}
    </button>
  );
};

export default Button;
