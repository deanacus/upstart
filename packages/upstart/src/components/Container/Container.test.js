import React from 'react';
import { render } from '@testing-library/react';
import { Theme } from '../Theme/Theme';
import { Container } from './Container';

describe('<Container />', () => {
  it('should render', () => {
    const { container } = render(
      <Container className="test-container">
        Children
      </Container>,
    );
    const containerDiv = container.querySelector('.test-container');
    expect(containerDiv).not.toBe(undefined);
  });

  it('should have a max-width of 1200px if fixed is true and no size is set', () => {
    const { container } = render(
      <Container className="test-container" fixed>
        Children
      </Container>,
    );
    const containerDiv = container.querySelector('.test-container');
    expect(containerDiv).toHaveStyleRule('max-width', '1200px');
  });

  it('should have a max-width matching the theme value if fixed is a true and a size is set', () => {
    const { container } = render(
      <Container className="test-container" size="sm" isFixed>
        Children
      </Container>,
    );
    const containerDiv = container.querySelector('.test-container');
    expect(containerDiv).toHaveStyleRule('max-width', `${Theme.widths.sm / Theme.rootVal}rem`);
  });
});
