import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Subtitle from '@Components/Subtitle';

import theme from '@Theme/index';

describe('<Subtitle />', () => {
  const componentToRender = render(
    <ThemeProvider theme={theme}>
      <Subtitle isBigger content="Meu nome é Fulano ;)" />
    </ThemeProvider>
  );

  it('should render the component', () => {
    expect(componentToRender).toBeTruthy();
  });
});
