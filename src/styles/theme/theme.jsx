const { createTheme } = require('@mui/material');

export const theme = createTheme({
  typography: {
    h2: {
      fontSize: '28px',
      fontWeight: 700,
    },
    h3: {
      fontSize: '20px',
      fontWeight: 700,
    },
    h4: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1,
    },
  },
  colors: {
    $grey: '#ebebeb',
    $darkGrey: '#808080',
    $white: '#ffffff',
    $blue: '#294b8a',
    $lightBlue: '#a8c2f3',
    $orange: '#e27217',
    $black: '#000000',
  },
  spaces: x => `${4 * x}px`,

  options: {
    radius: '4px',
    shadow: '2px 2px 5px 4px rgba(212, 212, 212, 0.5)',
    buttonOutShadow: '2px 2px 3px 2px rgba(212, 212, 212, 0.5)',
    buttonInnerShadow: '3px 3px 3px 0px rgba(0, 0, 0, 0.2) inset',
    time: '250ms',
    cubic: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
