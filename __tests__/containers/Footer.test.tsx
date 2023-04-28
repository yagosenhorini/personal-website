import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Footer from '@Containers/Footer';

import theme from '@Theme/index';

describe('Footer component', () => {
  it('Should render the footer', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    expect(component).toBeTruthy();
  });
});
