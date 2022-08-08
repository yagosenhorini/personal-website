import React from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, render } from '@testing-library/react';

import Home from '@Pages/Home';

import { GlobalTheme } from '@Theme/GlobalTheme';

afterEach(cleanup);

const componentToRender = render(
  <ThemeProvider theme={GlobalTheme}>
    <Home />
  </ThemeProvider>
);

describe('<Home />', () => {
  it('should render the component', async () => {
    expect(componentToRender).toBeTruthy();
  });
});
