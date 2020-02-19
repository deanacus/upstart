import React from 'react';
import { render } from '../../helpers/test-utils';
import { TableHead } from '../../../components';

describe('<TableHead />', () => {
  it('should render', () => {
    const { container } = render(
      <table>
        <TableHead className="test-row">
          <th>Test</th>
        </TableHead>
      </table>,
    );
    const row = container.querySelector('.test-row');
    expect(row).not.toBe(undefined);
  });
});
