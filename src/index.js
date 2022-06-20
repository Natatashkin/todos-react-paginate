import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'styles/index.scss';
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
  <React.StrictMode>
    <BrowserRouter basename="/todo/">
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
