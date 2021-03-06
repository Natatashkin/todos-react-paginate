import {theme} from '../theme/theme';

export const globalStyles = {
  body: { 
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    backgroundColor: `${theme.colors.$grey}`,
  },
  
'ul, p, h1, h2, h3, h4, h5, h6': {
    margin: '0',
    padding: '0'
  },
  
  ul: {
    listStyle: 'none'
  }
  
}