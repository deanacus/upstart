import React from 'react';
import { render } from '@testing-library/react';
import { Column } from './Column';
import { Theme } from '../Theme/Theme';

describe('<Column />', () => {
  it('should render', () => {
    const { container } = render(<Column className="test-column">Content</Column>);

    const column = container.querySelector('div');
    expect(column).not.toBe(undefined);
  });

  it('should pass a className through to the rendered element', () => {
    const { container } = render(<Column className="test-column">Content</Column>);

    const column = container.querySelector('.test-column');
    expect(column).not.toBe(undefined);
  });

  it('should render with a flex-basis equal to the cols passed as a percentage of 12', () => {
    const width = 6 / 12 * 100;
    const { container } = render(<Column className="test-column" cols={6}>Content</Column>);

    const column = container.querySelector('.test-column');
    expect(column).toHaveStyleRule('flex-basis', `${width}%`);
  });

  it('should render with a max-width equal to the cols passed as a percentage of 12', () => {
    const width = 3 / 12 * 100;
    const { container } = render(<Column className="test-column" cols={3}>Content</Column>);

    const column = container.querySelector('.test-column');
    expect(column).toHaveStyleRule('max-width', `${width}%`);
  });

  it('should set the justify-content to the passed in value', () => {
    const { container } = render(<Column className="test-column" justify="center">Content</Column>);

    const column = container.querySelector('.test-column');
    expect(column).toHaveStyleRule('justify-content', 'center');
  });

  it('should set the align-items to the passed in align value', () => {
    const { container } = render(<Column className="test-column" align="center">Content</Column>);

    const column = container.querySelector('.test-column');
    expect(column).toHaveStyleRule('align-items', 'center');
  });

  it('should add padding when a valid padding value is passed in', () => {
    const { container } = render(<Column className="test-column" padding="p-3">Content</Column>);

    const column = container.querySelector('.test-column');
    expect(column).toHaveStyleRule('padding', `${Theme.space[3] / Theme.rootVal}rem`);
  });

  it('should reverse flex direction when isReverse is true', () => {
    const { container } = render(<Column className="test-column" isReverse>Content</Column>);

    const column = container.querySelector('.test-column');
    expect(column).toHaveStyleRule('flex-direction', 'column-reverse');
  });
});
