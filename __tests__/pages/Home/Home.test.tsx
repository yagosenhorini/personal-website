import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render } from '@testing-library/react';

import Home from '@Pages/Home';
import theme from '@Theme/index';

afterEach(cleanup);

const componentToRender = render(
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

describe('<Home />', () => {
  it('should render the component', async () => {
    expect(componentToRender).toBeTruthy();
  });
});
