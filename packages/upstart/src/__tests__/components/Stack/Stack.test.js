import React from 'react';
import { render } from '../../helpers/test-utils';
import { Stack } from '../../../components';

describe('<Stack />', () => {
  it('should render', () => {
    const { container } = render(
      <Stack className="test-stack">Content</Stack>,
    );
    const stack = container.querySelector('.test-stack');
    expect(stack).not.toBe(undefined);
  });

  it('should render a vertical stack by default', () => {
    const { container } = render(
      <Stack className="test-stack">Content</Stack>,
    );
    const stack = container.querySelector('.test-stack');
    expect(stack).toHaveStyleRule('flex-direction', 'column');
  });

  it('should render a horizontal stack when horizontal is true', () => {
    const { container } = render(
      <Stack className="test-stack" horizontal>Content</Stack>,
    );
    const stack = container.querySelector('.test-stack');
    expect(stack).toHaveStyleRule('flex-direction', 'row');
  });
});
