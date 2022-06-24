import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
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
  productionPrefix: 'fetss-',
  disableGlobal: false,
  seed: 'ss',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/todo/">
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <GlobalStyles styles={globalStyles} />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
,
);
