import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Subtitle from '@Components/Subtitle';

import { GlobalTheme } from '@Theme/GlobalTheme';

describe('<Subtitle />', () => {
  const componentToRender = render(
    <ThemeProvider theme={GlobalTheme}>
      <Subtitle isBigger content="Meu nome é Fulano ;)" />
    </ThemeProvider>
  );

  it('should render the component', () => {
    expect(componentToRender).toBeTruthy();
  });
});
