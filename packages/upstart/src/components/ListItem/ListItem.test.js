import React from 'react';
import { render } from '@testing-library/react';
import { ListItem } from './ListItem';

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
