import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import MenuMobile from '@Components/MenuMobile';

import theme from '@Theme/index';

jest.mock('next/image');
jest.mock('react-responsive');

const mockedFn = jest.fn();

afterEach(cleanup);

describe('<HeaderMenu />', () => {
  it('should render the component', () => {
    const isActive = false;
    const renderedComponent = render(
      <ThemeProvider theme={theme}>
        <MenuMobile isActive={isActive} setIsActive={mockedFn} testId="test">
          <span>oi</span>
        </MenuMobile>
      </ThemeProvider>
    );
    renderedComponent.debug();
    expect(renderedComponent).toBeTruthy();
  });
});
