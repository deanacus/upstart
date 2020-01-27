import React from 'react';
import { render } from '../../utils/test-utils';
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

  it('should have a max-width of the xxl width of the theme if no size is set', () => {
    const { container } = render(
      <Container className="test-container">
        Children
      </Container>,
    );
    const containerDiv = container.querySelector('.test-container');
    expect(containerDiv).toHaveStyleRule('max-width', `${Theme.widths.xxl}px`);
  });

  it('should have a max-width matching the theme value if a size is set', () => {
    const { container } = render(
      <Container className="test-container" size="sm">
        Children
      </Container>,
    );
    const containerDiv = container.querySelector('.test-container');
    expect(containerDiv).toHaveStyleRule('max-width', `${Theme.widths.sm}px`);
  });
});
