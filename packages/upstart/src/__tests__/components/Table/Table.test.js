import React from 'react';
import { render } from '../../helpers/test-utils';
import { Table } from '../../../components';

describe('<Table />', () => {
  it('should render', () => {
    const { container } = render(
      <Table className="test-table">
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>,
    );
    const table = container.querySelector('.test-table');
    expect(table).not.toBe(undefined);
  });
});
