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
    expect(gridItem).toHaveStyle(`grid-column: auto / ${end}`);
  });

  it('should have a grid-column matching the start value', () => {
    const start = 2;
    const { container } = render(
      <GridItem className="test-grid-item" start={start}>
        Content
      </GridItem>,
    );
    const gridItem = container.querySelector('.test-grid-item');
    expect(gridItem).toHaveStyle(`grid-column: ${start} / auto`);
  });

  it('should have a grid-column matching the start and end values', () => {
    const start = 2;
    const end = 4;
    const { container } = render(
      <GridItem className="test-grid-item" start={start} end={end}>
        Content
      </GridItem>,
    );
    const gridItem = container.querySelector('.test-grid-item');
    expect(gridItem).toHaveStyle(`grid-column: ${start} / ${end}`);
  });

  it('should have a grid-column matching the span value', () => {
    const span = 3;
    const { container } = render(
      <GridItem className="test-grid-item" span={span}>
        Content
      </GridItem>,
    );
    const gridItem = container.querySelector('.test-grid-item');
    expect(gridItem).toHaveStyle(`grid-column: auto / span ${span}`);
  });

  it('should have a grid-column matching the start and span values', () => {
    const span = 3;
    const start = 1;
    const { container } = render(
      <GridItem className="test-grid-item" start={start} span={span}>
        Content
      </GridItem>,
    );
    const gridItem = container.querySelector('.test-grid-item');
    expect(gridItem).toHaveStyle(`grid-column: ${start} / span ${span}`);
  });

  it('should have a grid-column matching the span and end values', () => {
    const span = 3;
    const end = 5;
    const { container } = render(
      <GridItem className="test-grid-item" end={end} span={span}>
        Content
      </GridItem>,
    );
    const gridItem = container.querySelector('.test-grid-item');
    expect(gridItem).toHaveStyle(`grid-column: span ${span} / ${end}`);
  });
});
