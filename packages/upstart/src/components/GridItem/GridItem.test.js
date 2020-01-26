import React from 'react';
import { render } from '@testing-library/react';
import { GridItem } from './GridItem';

describe('<GridItem />', () => {
  it('should render', () => {
    const { container } = render(
      <GridItem className="test-grid-item">
        Children
      </GridItem>,
    );
    const gridItem = container.querySelector('.test-grid-item');
    expect(gridItem).not.toBe(undefined);
  });
});
