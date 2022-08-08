import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import FirstSection from '@Pages/Home/components/FirstSection';

import { GlobalTheme } from '@Theme/GlobalTheme';

const componentToRender = render(
  <ThemeProvider theme={GlobalTheme}>
    <FirstSection />
  </ThemeProvider>
);

describe('<FirstSection />', () => {
  it('should render the component', () => {
    expect(componentToRender).toBeTruthy();
  });
});
