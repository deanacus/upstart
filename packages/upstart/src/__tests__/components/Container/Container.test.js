import React from 'react';
import { render } from '../../helpers/test-utils';
import { Theme, Container } from '../../../components';


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

  it('should have a max-width of the xl width of the theme if no size is set', () => {
    const { container } = render(
      <Container className="test-container">
        Children
      </Container>,
    );
    const containerDiv = container.querySelector('.test-container');
    expect(containerDiv).toHaveStyleRule('max-width', `${Theme.widths.xl}px`);
  });

  it('should have left and right margin values of auto if isCentered', () => {
    const { container } = render(
      <Container className="test-container" isCentered>
        Children
      </Container>,
    );
    const containerDiv = container.querySelector('.test-container');
    expect(containerDiv).toHaveStyleRule('margin-left', 'auto');
    expect(containerDiv).toHaveStyleRule('margin-right', 'auto');
  });

  it('should have a max-width matching the theme value if a size is set', () => {
    const { container, debug } = render(
      <Container className="test-container" size="sm">
        Children
      </Container>,
    );

    debug();
    const containerDiv = container.querySelector('.test-container');
    expect(containerDiv).toHaveStyleRule('max-width', `${Theme.widths.sm}px`);
  });
});
