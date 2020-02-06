import React from 'react';
import { render } from '../../utils/test-utils';
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

  it('should render the label above the input by default', () => {
    const { container } = render(
      <Input className="test-input" id="test-input" label="Test input">
        Children
      </Input>,
    );
    const input = container.querySelector('.test-input');
    expect(input).toHaveStyle('flex-direction: column;');
  });

  it('should render the label beside the input when isInline', () => {
    const { container } = render(
      <Input isInline className="test-input" id="test-input" label="Test input">
        Children
      </Input>,
    );
    const input = container.querySelector('.test-input');
    expect(input).toHaveStyle('flex-direction: row;');
  });
});
