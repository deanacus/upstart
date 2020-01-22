import React from 'react';
import { render } from '@testing-library/react';
import { OrderedList } from './OrderedList';

describe('<OrderedList />', () => {
  it('should render', () => {
    const { container } = render(
      <OrderedList className="test-list">
        Children
      </OrderedList>,
    );
    const list = container.querySelector('.test-list');
    expect(list).not.toBe(undefined);
  });
});