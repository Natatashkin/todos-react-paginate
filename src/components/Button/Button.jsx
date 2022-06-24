import { Button as TodoTextButton } from '@mui/material';
import classNames from 'classnames';
import { useStyles } from './Button.styles';

const Button = ({
  type = 'button',
  title = 'Add Task',
  disabled = false,
  onClick = () => {},
}) => {
  const styles = useStyles();
  return (
    <TodoTextButton
      classes={{ contained: styles.button }}
      className={classNames([{ [styles.disabledButton]: disabled }])}
      variant="contained"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </TodoTextButton>
  );
};

export default Button;
