import React from 'react';
import { render } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('<TableCell />', () => {
  it('should render', () => {
    const { container } = render(
      <TableCell className="test-cell">
        Children
      </TableCell>,
    );
    const cell = container.querySelector('.test-cell');
    expect(cell).not.toBe(undefined);
  });
});
