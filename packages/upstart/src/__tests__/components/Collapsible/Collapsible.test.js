import React from 'react';
import { render } from '../../helpers/test-utils';
import { Collapsible } from '../../../components';

describe('<Collapsible />', () => {
  it('should render', () => {
    const { container } = render(<Collapsible className="test-Collapsible">Content</Collapsible>);
    const collapsible = container.querySelector('div');
    expect(collapsible).not.toBe(undefined);
  });
});
