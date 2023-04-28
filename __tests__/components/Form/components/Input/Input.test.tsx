import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Input from '@Components/Form/components/Input';
import theme from '@Theme/index';

const mockedOnChange = jest.fn();

describe('<Input />', () => {
  const componentToRender = (
    <ThemeProvider theme={theme}>
      <Input
        placeholder="test"
        testId="input-component"
        onChange={mockedOnChange}
        error=""
        name="name"
        type="text"
        id="test"
      />
    </ThemeProvider>
  );

  it('should render the input', () => {
    const component = render(componentToRender);
    expect(component).toBeTruthy();
  });

  it('should change the input value', async () => {
    const { findByTestId } = render(componentToRender);

    const $input = await findByTestId('input-component');

    fireEvent.change($input, { target: { value: 'element' } });

    expect(mockedOnChange).toBeCalled();
  });
});
