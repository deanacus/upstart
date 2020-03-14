import React from 'react';
import { render } from '../../helpers/test-utils';
import { Theme, Dot } from '../../../components';
import { getRem } from '../../../utils/styled-utils';

describe('<Dot />', () => {
  it('should render', () => {
    const { container } = render(<Dot className="test-dot" />);

    const dot = container.querySelector('.test-dot');
    expect(dot).not.toBe(undefined);
  });

  it('should render the right color', () => {
    const { container } = render(<Dot className="test-dot" variant="success" />);

    const dot = container.querySelector('.test-dot');
    expect(dot).toHaveStyleRule('background', Theme.colors.success[5]);
  });

  it('should render the right size', () => {
    const { container } = render(<Dot className="test-dot" size="xs" />);

    const dot = container.querySelector('.test-dot');
    expect(dot).toHaveStyleRule('height', getRem(Theme.space.xs));
    expect(dot).toHaveStyleRule('width', getRem(Theme.space.xs));
  });
});
