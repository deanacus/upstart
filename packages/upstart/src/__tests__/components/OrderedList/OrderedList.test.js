import React from 'react';
import { render } from '../../helpers/test-utils';
import { List } from '../../../components';

describe('<OrderedList />', () => {
  it('should render', () => {
    const { container } = render(
      <List className="test-list">
        Children
      </List>,
    );
    const list = container.querySelector('.test-list');
    expect(list).not.toBe(undefined);
  });
});
