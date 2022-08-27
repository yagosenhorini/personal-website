import { DefaultTheme } from 'styled-components';

import { rem } from 'polished';

const GlobalTheme: DefaultTheme = {
  outline: 'none',
  margin: `${rem(0)}`,
  padding: `${rem(0)}`,
  boxSizing: 'border-box',

  colors: {
    main: '#E5E5E5',
    white: '#fff',
    black: '#000',
    red: '#f80306',
    darkRed: '#82090f',
    orange: '#ED7D31',
    darkBlue: '#45577B',
    lightGray: '#7a8391',
    darkGray: '#46434E',
    descriptionGray: '#C4C4C4',
  },

  fontPrimary: 'ubuntu',
  fontSecondary: 'Arial',
};

export { GlobalTheme };
