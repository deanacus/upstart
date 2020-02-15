import React from 'react';
import { render } from 'test-utils';
import { ListItem } from '../../../components';

describe('<ListItem />', () => {
  it('should render', () => {
    const { container } = render(
      <ListItem className="test-item">
        Children
      </ListItem>,
    );
    const item = container.querySelector('.test-item');
    expect(item).not.toBe(undefined);
  });
});
