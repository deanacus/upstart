import React from 'react';
import { render } from '@testing-library/react';
import { List } from './List';

describe('<List />', () => {
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