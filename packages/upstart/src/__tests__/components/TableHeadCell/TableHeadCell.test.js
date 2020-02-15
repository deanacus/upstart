import React from 'react';
import { render } from 'test-utils';
import { TableHeadCell, Theme } from '../../../components';
import { getRem } from '../../../utils/styled-utils';

describe('<TableHeadCell />', () => {
  it('should render', () => {
    const { container } = render(
      <table>
        <thead>
          <tr>
            <TableHeadCell className="test-cell">
              Children
            </TableHeadCell>
          </tr>
        </thead>
      </table>,
    );
    const cell = container.querySelector('.test-cell');
    expect(cell).not.toBe(undefined);
  });

  it('should have a padding value that matches the passed in string', () => {
    const { container } = render(
      <table>
        <thead>
          <tr>
            <TableHeadCell className="test-cell" padding="px-2">
              Children
            </TableHeadCell>
          </tr>
        </thead>
      </table>,
    );
    const cell = container.querySelector('.test-cell');
    expect(cell).toHaveStyle(`padding-left: ${getRem(Theme.space[2], Theme.rootVal)}`);
  });
});
