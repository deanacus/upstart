import React from 'react';
import { render } from '@testing-library/react';
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
});
