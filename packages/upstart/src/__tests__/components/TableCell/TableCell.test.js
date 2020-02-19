import React from 'react';
import { render } from '../../helpers/test-utils';
import { TableCell, Theme } from '../../../components';
import { getRem } from '../../../utils/styled-utils';

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

  it('should have a padding value that matches the passed in string', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <TableCell className="test-cell" padding="px-2">
              Children
            </TableCell>
          </tr>
        </tbody>
      </table>,
    );
    const cell = container.querySelector('.test-cell');
    expect(cell).toHaveStyle(`padding-left: ${getRem(Theme.space[2], Theme.rootVal)}`);
  });
});
