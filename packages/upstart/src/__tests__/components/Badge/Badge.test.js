import React from 'react';
import { render } from '../../helpers/test-utils';
import { Theme, Badge } from '../../../components';


describe('<Badge />', () => {
  it('should render', () => {
    const { container } = render(<Badge className="test-badge">lorem ipsum</Badge>);

    const badge = container.querySelector('.test-badge');
    expect(badge).not.toBe(undefined);
  });

  it('should render a default variant', () => {
    const { container } = render(<Badge className="test-badge">lorem ipsum</Badge>);

    const badge = container.querySelector('.test-badge');
    expect(badge).toHaveStyleRule('background', Theme.colors.grey[0]);
  });

  it('should render a success variant', () => {
    const { container } = render(<Badge className="test-badge" variant="success">lorem ipsum</Badge>);

    const badge = container.querySelector('.test-badge');
    expect(badge).toHaveStyleRule('background', Theme.colors.success[0]);
  });

  it('should render a error variant', () => {
    const { container } = render(<Badge className="test-badge" variant="error">lorem ipsum</Badge>);

    const badge = container.querySelector('.test-badge');
    expect(badge).toHaveStyleRule('background', Theme.colors.error[0]);
  });

  it('should render a warning variant', () => {
    const { container } = render(<Badge className="test-badge" variant="warning">lorem ipsum</Badge>);

    const badge = container.querySelector('.test-badge');
    expect(badge).toHaveStyleRule('background', Theme.colors.warning[0]);
  });

  it('should render a primary variant', () => {
    const { container } = render(<Badge className="test-badge" variant="primary">lorem ipsum</Badge>);

    const badge = container.querySelector('.test-badge');
    expect(badge).toHaveStyleRule('background', Theme.colors.primary[0]);
  });

  it('should render a secondary variant', () => {
    const { container } = render(<Badge className="test-badge" variant="secondary">lorem ipsum</Badge>);

    const badge = container.querySelector('.test-badge');
    expect(badge).toHaveStyleRule('background', Theme.colors.secondary[0]);
  });
});
