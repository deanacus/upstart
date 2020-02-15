import React from 'react';
import { render } from 'test-utils';
import { Theme, Card } from '../../../components';
import { getRem } from '../../../utils/styled-utils';

describe('<Card />', () => {
  it('should render', () => {
    const { container } = render(<Card className="test-card">Content</Card>);
    const card = container.querySelector('.test-card');
    expect(card).not.toBe(undefined);
  });

  it('should have a margin value matching the string passed in', () => {
    const { container } = render(<Card className="test-card" margin="m-2">Content</Card>);
    const card = container.querySelector('.test-card');
    expect(card).toHaveStyle(`margin: ${getRem(Theme.space[2], Theme.rootVal)}`);
  });

  it('should have a padding value matching the string passed in', () => {
    const { container } = render(<Card className="test-card" padding="p-3">Content</Card>);
    const card = container.querySelector('.test-card');
    expect(card).toHaveStyle(`padding:  ${getRem(Theme.space[3], Theme.rootVal)}`);
  });

  it('should have rounded corners', () => {
    const { container } = render(<Card className="test-card" isRounded>Content</Card>);
    const card = container.querySelector('.test-card');
    expect(card).toHaveStyle(`border-radius: ${Theme.radii.md}`);
  });

  it('should have a border', () => {
    const { container } = render(<Card className="test-card" isBordered>Content</Card>);
    const card = container.querySelector('.test-card');
    expect(card).toHaveStyle(`border: .1rem solid ${Theme.colors.grey[3]}`);
  });

  it('should have a lighter border when isDarkMode is true', () => {
    const { container } = render(<Card className="test-card" isBordered isDarkMode>Content</Card>);
    const card = container.querySelector('.test-card');
    expect(card).toHaveStyle(`border:  .1rem solid ${Theme.colors.grey[7]}`);
  });

  it('should have a background-color when isDarkMode is true', () => {
    const { container } = render(<Card className="test-card" isDarkMode>Content</Card>);
    const card = container.querySelector('.test-card');
    expect(card).toHaveStyle(`background: ${Theme.colors.grey[8]}`);
  });
});
