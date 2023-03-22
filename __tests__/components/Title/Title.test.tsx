import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Title from '@Components/Title';
import theme from '@Theme/index';

const componentToRender = render(
  <ThemeProvider theme={theme}>
    <Title text="Bem vindo" />
  </ThemeProvider>
);

describe('<Title />', () => {
  it('should render the title', () => {
    expect(componentToRender).toBeTruthy();
  });
});
