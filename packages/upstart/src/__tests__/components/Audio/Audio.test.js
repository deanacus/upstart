import React from 'react';
import { render } from '../../helpers/test-utils';
import { Audio } from '../../../components';

describe('<Audio>', () => {
  it('should render', () => {
    const { container } = render(<Audio />);

    const audio = container.querySelector('audio');
    expect(audio).not.toBe(undefined);
  });

  it('should use a source child', () => {
    const { container } = render(
      <Audio>
        <source
          src="/media/sample.mp3"
          type="audio/mpeg"
        />
      </Audio>,
    );

    const source = container.querySelector('source');
    expect(source).not.toBe(undefined);
  });

  it('should render', () => {
    const { container } = render(<Audio src="/media/sample.mp3" />);

    const src = container.querySelector('audio').getAttribute('src');
    expect(src).toBe('/media/sample.mp3');
  });
});
