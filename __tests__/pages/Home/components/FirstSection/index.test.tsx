import React from 'react';
import { render } from '@testing-library/react';

import FirstSection from '@Pages/Home/components/FirstSection';

const componentToRender = render(<FirstSection />);

describe('<FirstSection />', () => {
  it('should render the component', () => {
    expect(componentToRender).toBeTruthy();
  });
});
