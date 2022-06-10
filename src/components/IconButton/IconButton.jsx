import './IconButton.scss';

const IconButton = ({ icon, onClick, ...args }) => {
  return (
    <button className="icon-button" onClick={onClick} {...args}>
      {icon}
    </button>
  );
};

export default IconButton;
