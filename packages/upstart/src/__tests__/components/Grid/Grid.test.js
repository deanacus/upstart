import React from 'react';
import { render } from 'test-utils';
import { Grid } from '../../../components';

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
