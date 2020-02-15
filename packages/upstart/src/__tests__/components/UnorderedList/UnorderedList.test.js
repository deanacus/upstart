import React from 'react';
import { render } from 'test-utils';
import { UnorderedList } from '../../../components';

describe('<UnorderedList />', () => {
  it('should render', () => {
    const { container } = render(
      <UnorderedList className="test-list">
        Children
      </UnorderedList>,
    );
    const list = container.querySelector('.test-list');
    expect(list).not.toBe(undefined);
  });
});
