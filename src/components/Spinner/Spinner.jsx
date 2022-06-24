import { Oval } from 'react-loader-spinner';
import {useStyles} from './Spinner.styles';

const Spinner = () => {
  const styles = useStyles();
  return (
    <div className={styles.spinner}>
      <Oval color="#294b8a" height={30} width={30} />
    </div>
  );
};

export default Spinner;
