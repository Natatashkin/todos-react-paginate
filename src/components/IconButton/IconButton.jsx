import { IconButton as TodoIconButton } from '@mui/material';
// import { Tooltip } from '../Tooltip';
import { useStyles } from './IconButton.styles';
import classNames from 'classnames';

const IconButton = ({
  icon,
  type = 'button',
  onClick = () => {},
  disabled,
  tooltipText,
  component = '',
  edge,
}) => {
  const styles = useStyles();
  return (
    <>
      <TodoIconButton
        edge={edge}
        classes={{ root: styles.buttonColor }}
        className={classNames([
          styles.iconPosition,
          {
            [styles.iconPositionModal]: component === 'modal',
            [styles.iconPositionFilter]: component === 'filter',
          },
        ])}
        type={type}
        disableFocusRipple
        size="small"
        disabled={disabled}
        onClick={onClick}
      >
        {icon}
      </TodoIconButton>
      {/* {tooltipText && <Tooltip text={tooltipText} />} */}
    </>
  );
};

export default IconButton;
