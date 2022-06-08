const Button = ({
  type = 'button',
  title = 'Button',
  onClick = () => {},
  ...args
}) => {
  return (
    <button type={type} onClick={onClick} {...args}>
      {title}
    </button>
  );
};

export default Button;
