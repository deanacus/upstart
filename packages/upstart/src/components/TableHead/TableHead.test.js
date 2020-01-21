import React from 'react';
import { render } from '@testing-library/react';
import { TableHead } from './TableHead';

describe('<TableHead />', () => {
  it('should render', () => {
    const { container } = render(
      <TableHead className="test-row">
        Children
      </TableHead>,
    );
    const row = container.querySelector('.test-row');
    expect(row).not.toBe(undefined);
  });
});
