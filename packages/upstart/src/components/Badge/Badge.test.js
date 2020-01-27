import React from 'react';
import { render } from '../../utils/test-utils';
import { Theme } from '../Theme/Theme';
import { Badge } from './Badge';

describe('<Badge />', () => {
  it('should render', () => {
    const { container } = render(<Badge>lorem ipsum</Badge>);

    const badge = container.querySelector('span');
    expect(badge).not.toBe(undefined);
  });

  it('should render a default variant', () => {
    const { container } = render(<Badge>lorem ipsum</Badge>);

    const badge = container.querySelector('span');
    expect(badge).toHaveStyleRule('background', Theme.colors.grey[0]);
  });

  it('should render a success variant', () => {
    const { container } = render(<Badge variant="success">lorem ipsum</Badge>);

    const badge = container.querySelector('span');
    expect(badge).toHaveStyleRule('background', Theme.colors.success[0]);
  });

  it('should render a error variant', () => {
    const { container } = render(<Badge variant="error">lorem ipsum</Badge>);

    const badge = container.querySelector('span');
    expect(badge).toHaveStyleRule('background', Theme.colors.error[0]);
  });

  it('should render a warning variant', () => {
    const { container } = render(<Badge variant="warning">lorem ipsum</Badge>);

    const badge = container.querySelector('span');
    expect(badge).toHaveStyleRule('background', Theme.colors.warning[0]);
  });

  it('should render a primary variant', () => {
    const { container } = render(<Badge variant="primary">lorem ipsum</Badge>);

    const badge = container.querySelector('span');
    expect(badge).toHaveStyleRule('background', Theme.colors.primary[0]);
  });

  it('should render a secondary variant', () => {
    const { container } = render(<Badge variant="secondary">lorem ipsum</Badge>);

    const badge = container.querySelector('span');
    expect(badge).toHaveStyleRule('background', Theme.colors.secondary[0]);
  });
});
