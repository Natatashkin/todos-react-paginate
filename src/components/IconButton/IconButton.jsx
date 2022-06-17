import { Tooltip } from '../Tooltip';
import classNames from 'classnames';

const IconButton = ({
  type = 'button',
  icon,
  onClick = () => {},
  disabled,
  tooltipText,
  component = '',
}) => {
  return (
    <button
      className={classNames([
        'icon-button',
        {
          'icon-button--modal': component === 'modal',
          'icon-button--filter': component === 'filter',
        },
      ])}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {tooltipText && <Tooltip text={tooltipText} />}
    </button>
  );
};

export default IconButton;
