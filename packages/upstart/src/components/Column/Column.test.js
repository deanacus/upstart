import React from 'react';
import { render } from '@testing-library/react';
import { Column } from './Column';
import { Row } from '../Row/Row';

describe('<Column />', () => {
  it('should render', () => {
    const { container } = render(<Column>Content</Column>);

    const column = container.querySelector('div');
    expect(column).not.toBe(undefined);
  });

  it('should render with a flex-basis equal to the cols passed as a percentage of 12', () => {
    const width = 6 / 12 * 100;
    const { container } = render(<Column cols={6}>Content</Column>);

    const column = container.querySelector('div');
    expect(column).toHaveStyleRule('flex-basis', `${width}%`);
  });

  it('should render with a max-width equal to the cols passed as a percentage of 12', () => {
    const width = 3 / 12 * 100;
    const { container } = render(<Column cols={3}>Content</Column>);

    const column = container.querySelector('div');
    expect(column).toHaveStyleRule('max-width', `${width}%`);
  });
});
