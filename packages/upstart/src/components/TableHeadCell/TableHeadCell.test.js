import React from 'react';
import { render } from '@testing-library/react';
import { TableHeadCell } from './TableHeadCell';

describe('<TableHeadCell />', () => {
  it('should render', () => {
    const { container } = render(
      <TableHeadCell className="test-cell">
        Children
      </TableHeadCell>,
    );
    const cell = container.querySelector('.test-cell');
    expect(cell).not.toBe(undefined);
  });
});
