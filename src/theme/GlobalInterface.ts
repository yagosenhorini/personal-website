import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    margin: string;
    padding: string;
    boxSizing: string;
    outline: string;

    colors: {
      main: string;
      white: string;
      black: string;
      red: string;
      darkRed: string;
      darkBlue: string;
      orange: string;
      lightGray: string;
      darkGray: string;
      descriptionGray: string;
    };

    fontPrimary: string;
    fontSecondary: string;
  }
}
