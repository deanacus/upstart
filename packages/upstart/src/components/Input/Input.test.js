import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('<Input />', () => {
  it('should render', () => {
    const { container } = render(
      <Input className="test-input" id="test-input" label="Test input">
        Children
      </Input>,
    );
    const input = container.querySelector('.test-input');
    expect(input).not.toBe(undefined);
  });
});
