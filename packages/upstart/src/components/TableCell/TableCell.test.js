import React from 'react';
import { render } from '../../utils/test-utils';
import { TableCell } from './TableCell';

describe('<TableCell />', () => {
  it('should render', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <TableCell className="test-cell">
              Children
            </TableCell>
          </tr>
        </tbody>
      </table>,
    );
    const cell = container.querySelector('.test-cell');
    expect(cell).not.toBe(undefined);
  });
});
