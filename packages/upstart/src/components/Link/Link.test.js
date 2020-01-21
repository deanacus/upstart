import React from 'react';
import { render } from '@testing-library/react';
import { Link } from './Link';

describe('<Link />', () => {
  it('should render', () => {
    const { container } = render(
      <Link className="test-link">
        Children
      </Link>,
    );
    const link = container.querySelector('.test-link');
    expect(link).not.toBe(undefined);
  });
});
