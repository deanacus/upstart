import React from 'react';
import { render, fireEvent } from '../../utils/test-utils';
import { Theme } from '../Theme/Theme';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render', () => {
    const { container } = render(<Button>Test</Button>);
    const button = container.querySelector('button');
    expect(button).not.toBe(null);
  });

  it('should use the default button type', () => {
    const { container } = render(<Button>Test</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should use the passed in button type', () => {
    const { container } = render(<Button type="submit">Test</Button>);
    const submit = container.querySelector('button');
    expect(submit).toHaveAttribute('type', 'submit');
  });

  it('should render children', () => {
    const { container } = render(<Button>Test</Button>);
    const button = container.querySelector('button');
    expect(button.innerHTML).toBe('Test');
  });

  it('should render an anchor tag when href passed', () => {
    const { container } = render(<Button href="/test">Test</Button>);
    const link = container.querySelector('a');
    const button = container.querySelector('button');
    expect(link).not.toBe(null);
    expect(button).toBe(null);
  });

  it('should be disabled when that is passed in', () => {
    const { container } = render(<Button isDisabled>Test</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveAttribute('disabled');
  });

  it('should call the handleClick function that is passed in', () => {
    const clickHandler = jest.fn();
    const { container } = render(<Button handleClick={clickHandler}>Test</Button>);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(clickHandler).toHaveBeenCalled();
  });

  it('should render with a solid background by default', () => {
    const { container } = render(<Button>Test</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveStyle(`background: ${Theme.colors.primary[5]}`);
  });

  it('should render with an outline when isOutline is true', () => {
    const { container } = render(<Button isOutline>Test</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveStyle(`border: 1px solid ${Theme.colors.primary[4]}; background: transparent`);
  });

  it('should render a pill shape when isRounded is true', () => {
    const { container } = render(<Button isRounded>Test</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveStyle(`border-radius: ${Theme.radii.pill}px`);
  });

  it('renders a primary color background when no variant passed', () => {
    const { container } = render(<Button>Test</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveStyle(`background: ${Theme.colors.primary[5]}`);
  });

  it('renders a secondary color background when the secondary variant is passed', () => {
    const { container } = render(<Button variant="secondary">Test</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveStyle(`background: ${Theme.colors.secondary[5]}`);
  });
});
