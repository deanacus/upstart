import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';

describe('<Blockquote />', () => {
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

    const button = container.querySelector('button');

    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should render children', () => {
    const { container } = render(<Button type="submit">Test</Button>);

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
});
