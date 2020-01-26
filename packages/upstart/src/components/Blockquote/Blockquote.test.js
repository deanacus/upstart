import React from 'react';
import { render } from '@testing-library/react';
import { Blockquote } from './Blockquote';

describe('<Blockquote />', () => {
  it('should render', () => {
    const { container } = render(<Blockquote><p>lorem ipsume</p></Blockquote>);

    const blockquote = container.querySelector('blockquote');
    expect(blockquote).not.toBe(undefined);
  });

  it('should render children', () => {
    const { container } = render(
      <Blockquote>
        <p>This is a test blockquote</p>
        <p>It has multiple children</p>
      </Blockquote>,
    );

    const children = container.querySelectorAll('blockquote p');
    expect(children).toHaveLength(2);
    expect(children[0].innerHTML).toBe('This is a test blockquote');
  });

  it('should render a citation', () => {
    const { container } = render(
      <Blockquote cite="test citation">
        <p>This is a test blockquote</p>
        <p>It has multiple children</p>
      </Blockquote>,
    );

    const citation = container.querySelector('cite');
    expect(citation).not.toBe(undefined);
    expect(citation.innerHTML).toBe('— test citation');
  });

  it('should render a border on the left-hand side by default', () => {
    const { container } = render(
      <Blockquote>
        <p>This is a test blockquote</p>
      </Blockquote>,
    );

    const blockquote = container.querySelector('blockquote');
    expect(blockquote).not.toHaveStyleRule('border-left', undefined);
  });

  it('should render a border on the right-hand side when rightBorder passed', () => {
    const { container } = render(
      <Blockquote rightBorder>
        <p>This is a test blockquote</p>
      </Blockquote>,
    );

    const blockquote = container.querySelector('blockquote');
    expect(blockquote).not.toHaveStyleRule('border-right', undefined);
  });
});
