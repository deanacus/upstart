import React from 'react';
import { render } from '../../utils/test-utils';
import { Separator } from './Separator';

describe('<Separator />', () => {
  it('should render', () => {
    const { container } = render(
      <Separator className="test-separator">
        Children
      </Separator>,
    );
    const separator = container.querySelector('.test-separator');
    expect(separator).not.toBe(undefined);
  });

  it('should render a horizontal rule by default', () => {
    const { container } = render(
      <Separator className="test-separator">
        Children
      </Separator>,
    );
    const hr = container.querySelector('hr.test-separator');
    const div = container.querySelector('div.test-separator');
    expect(hr).not.toBe(null);
    expect(div).toBe(null);
  });

  it('should render a div when isVertical is passed in', () => {
    const { container } = render(
      <Separator className="test-separator" isVertical>
        Children
      </Separator>,
    );
    const hr = container.querySelector('hr.test-separator');
    const div = container.querySelector('div.test-separator');
    expect(hr).toBe(null);
    expect(div).not.toBe(null);
  });
});
