import React from 'react';
import { render } from '../../helpers/test-utils';
import { TableBody } from '../../../components';

describe('<TableBody />', () => {
  it('should render', () => {
    const { container } = render(
      <table>
        <TableBody className="test-body">
          <tr>
            <td>Test</td>
          </tr>
        </TableBody>
      </table>,
    );
    const row = container.querySelector('.test-body');
    expect(row).not.toBe(undefined);
  });
});
