import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import HeaderMenu from '@Components/HeaderMenu';

import theme from '@Theme/index';

jest.mock('next/image');
jest.mock('react-responsive');

const componentToRender = (
  <ThemeProvider theme={theme}>
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
