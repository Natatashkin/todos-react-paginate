import { IconButton as TodoIconButton } from '@mui/material';
import { Tooltip } from '../Tooltip';
import { useStyles } from './IconButton.styles';
import classNames from 'classnames';

const IconButton = ({
  icon,
  type = 'button',
  onClick = () => {},
  disabled,
  tooltipText,
  component = '',
}) => {
  const styles = useStyles();
  return (
    <>
      <TodoIconButton
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
      {tooltipText && <Tooltip text={tooltipText} />}
    </>
  );
};
// const IconButton = ({
//   type = 'button',
//   icon,
//   onClick = () => {},
//   disabled,
//   tooltipText,
//   component = '',
// }) => {
//   return (
//     <button
//       className={classNames([
//         'icon-button',
//         {
//           'icon-button--modal': component === 'modal',
//           'icon-button--filter': component === 'filter',
//         },
//       ])}
//       type={type}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {icon}
//       {tooltipText && <Tooltip text={tooltipText} />}
//     </button>
//   );
// };

export default IconButton;
