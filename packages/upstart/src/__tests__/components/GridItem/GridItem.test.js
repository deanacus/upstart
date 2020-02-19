import React from 'react';
import { render } from '../../helpers/test-utils';
import { GridItem } from '../../../components';

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

  it('should have a grid-column-end matching the end value', () => {
    const end = 2;
    const { container } = render(
      <GridItem className="test-grid-item" end={end}>
        Content
      </GridItem>,
    );
    const gridItem = container.querySelector('.test-grid-item');
    expect(gridItem).toHaveStyle(`grid-column-end: ${end}`);
  });

  it('should have a grid-column-start matching the start value', () => {
    const start = 2;
    const { container } = render(
      <GridItem className="test-grid-item" start={start}>
        Content
      </GridItem>,
    );
    const gridItem = container.querySelector('.test-grid-item');
    expect(gridItem).toHaveStyle(`grid-column-start: ${start}`);
  });

  it('should have a grid-column-end matching the span value', () => {
    const span = 3;
    const { container } = render(
      <GridItem className="test-grid-item" span={span}>
        Content
      </GridItem>,
    );
    const gridItem = container.querySelector('.test-grid-item');
    expect(gridItem).toHaveStyle(`grid-column-end: span ${span}`);
  });
});
