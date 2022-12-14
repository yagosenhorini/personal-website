import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import HeaderMenu from '@Components/HeaderMenu';

import { GlobalTheme } from '@Theme/GlobalTheme';

jest.mock('next/image');

const componentToRender = (
  <ThemeProvider theme={GlobalTheme}>
    <HeaderMenu />
  </ThemeProvider>
);

afterEach(cleanup);

describe('<HeaderMenu />', () => {
  it('should render the component', () => {
    const renderedComponent = render(componentToRender);
    expect(renderedComponent).toBeTruthy();
  });
});
