import React from 'react';
import { render } from '@testing-library/react';

import ProjectCard from '@Components/ProjectCard';

describe('<ProjectCard />', () => {
  const componentToRender = <ProjectCard />;

  it('should render the component', () => {
    const component = render(componentToRender);
    expect(component).toBeTruthy();
  });
});
