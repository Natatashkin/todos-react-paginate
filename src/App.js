import { AppRoutes } from 'components/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import {
  createGenerateClassName,
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from '@mui/styles';
import jssIncreaseSpecificity from 'jss-increase-specificity';
import GlobalStyles from '@mui/material/GlobalStyles';
import { globalStyles } from 'styles/common/GlobalStyles';
import { create } from 'jss';
import { theme } from 'styles/theme/theme';

const jss = create({
  plugins: [...jssPreset().plugins, jssIncreaseSpecificity()],
});

const generateClassName = createGenerateClassName({
  productionPrefix: 'ntshkn-',
  disableGlobal: false,
  seed: 'ntshkn',
});

const App = () => {
  return (
    <BrowserRouter basename="/todo/">
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={globalStyles} />
          <AppRoutes />
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
