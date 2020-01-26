import React from 'react';
import { render } from '@testing-library/react';
import { Table } from './Table';

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
