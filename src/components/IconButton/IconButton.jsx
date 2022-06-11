import { Tooltip } from '../Tooltip';
import classNames from 'classnames';

const IconButton = ({
  type = 'button',
  icon,
  onClick,
  tooltipText,
  component = '',
}) => {
  return (
    <button
      className={classNames([
        'icon-button',
        { 'icon-button--modal': component },
      ])}
      type={type}
      onClick={onClick}
    >
      {icon}
      {tooltipText && <Tooltip text={tooltipText} />}
    </button>
  );
};

export default IconButton;
