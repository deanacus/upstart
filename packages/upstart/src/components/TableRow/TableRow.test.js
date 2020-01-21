import React from 'react';
import { render } from '@testing-library/react';
import { TableRow } from './TableRow';

describe('<TableRow />', () => {
  it('should render', () => {
    const { container } = render(
      <TableRow className="test-row">
        Children
      </TableRow>,
    );
    const row = container.querySelector('.test-row');
    expect(row).not.toBe(undefined);
  });
});
