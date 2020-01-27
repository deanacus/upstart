import React from 'react';
import { render } from '../../utils/test-utils';
import { Link } from './Link';

describe('<Link />', () => {
  it('should render', () => {
    const { container } = render(
      <Link className="test-link" href="https://upstart.deanacus.com">
        Children
      </Link>,
    );
    const link = container.querySelector('.test-link');
    expect(link).not.toBe(undefined);
  });
});
