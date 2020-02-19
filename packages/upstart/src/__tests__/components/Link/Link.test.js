import React from 'react';
import { render } from '../../helpers/test-utils';
import { Link } from '../../../components';

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

  it('should include an external indicator', () => {
    const { container } = render(
      <Link className="test-link" href="https://upstart.deanacus.com" isExternal>
        Children
      </Link>,
    );
    const externalIndicator = container.querySelector('.ext-link-icon');
    expect(externalIndicator).not.toBe(undefined);
  });
});
