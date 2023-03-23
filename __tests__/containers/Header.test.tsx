import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import preloadAll from 'jest-next-dynamic-ts';

import Header from '@Containers/Header';
import theme from '@Theme/index';

jest.mock('next/image');

beforeAll(async () => {
  await preloadAll();
});

describe('Header component', () => {
  it('should render the Header component', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(component).toBeTruthy();
  });
});
