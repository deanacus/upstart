import React from 'react';
import { render } from '@testing-library/react';
import { Grid } from './Grid';

describe('<Grid />', () => {
  it('should render', () => {
    const { container } = render(
      <Grid className="test-grid">
        Children
      </Grid>,
    );
    const grid = container.querySelector('.test-grid');
    expect(grid).not.toBe(undefined);
  });
});
