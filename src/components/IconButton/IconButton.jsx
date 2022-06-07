const IconButton = ({ icon, onClick, ...args }) => {
  return (
    <button onClick={onClick} {...args}>
      {icon}
    </button>
  );
};

export default IconButton;
