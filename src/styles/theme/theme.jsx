import { createTheme } from '@mui/material';

const LARGE_FONT_SIZE = '28px';
const MEDIUM_FONT_SIZE = '20px';
const SMALL_FONT_SIZE = '16px';

const BOLD_FONT_WEIGHT = 700;
const NORMAL_FONT_WEIGHT = 400;

export const theme = createTheme({
  typography: {
    h2: {
      fontSize: LARGE_FONT_SIZE,
      fontWeight: BOLD_FONT_WEIGHT,
    },
    h3: {
      fontSize: MEDIUM_FONT_SIZE,
      fontWeight: BOLD_FONT_WEIGHT,
      lineHeight: 1,
    },
    h4: {
      fontSize: SMALL_FONT_SIZE,
      fontWeight: NORMAL_FONT_WEIGHT,
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
    time: '250ms',
    cubic: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
