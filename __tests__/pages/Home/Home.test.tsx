import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Home from '@Pages/Home';

afterEach(cleanup);

const componentToRender = render(<Home />);

describe('<Home />', () => {
  it('should render the component', async () => {
    expect(componentToRender).toBeTruthy();
  });
});
