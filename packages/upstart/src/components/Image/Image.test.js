import React from 'react';
import { render } from '../../utils/test-utils';
import { Image } from './Image';

describe('<Image />', () => {
  it('should render', () => {
    const { container } = render(
      <Image className="test-image" src="" alt="">
        Children
      </Image>,
    );
    const image = container.querySelector('.test-image');
    expect(image).not.toBe(undefined);
  });

  it('should have a alt text', () => {
    const altText = 'Test alt text';
    const { container } = render(
      <Image className="test-image" src="" alt={altText}>
        Children
      </Image>,
    );

    const alt = container.querySelector('.test-image-image').getAttribute('alt');
    expect(alt).toBe(altText);
  });

  it('should have a src attribute', () => {
    const srcValue = 'dummy/src';
    const { container } = render(
      <Image className="test-image" src={srcValue} alt="">
        Children
      </Image>,
    );

    const src = container.querySelector('.test-image-image').getAttribute('src');
    expect(src).toBe(srcValue);
  });

  it('should have a caption', () => {
    const { container } = render(
      <Image caption="Test caption" alt="" src="">
        Content
      </Image>,
    );
    const caption = container.querySelector('caption');
    expect(caption).not.toBe(undefined);
  });
});
