import React from 'react';
import { render } from '@testing-library/react';
import { Row } from './Row';

describe('<Row />', () => {
  it('should render', () => {
    const { container } = render(
      <Row className="test-row">
        Children
      </Row>,
    );
    const row = container.querySelector('.test-row');
    expect(row).not.toBe(undefined);
  });
});