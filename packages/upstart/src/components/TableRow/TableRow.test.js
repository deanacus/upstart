import React from 'react';
import { render } from '../../utils/test-utils';
import { TableRow } from './TableRow';

describe('<TableRow />', () => {
  it('should render', () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow className="test-row">
            <td>Test</td>
          </TableRow>
        </tbody>
      </table>,
    );
    const row = container.querySelector('.test-row');
    expect(row).not.toBe(undefined);
  });
});
