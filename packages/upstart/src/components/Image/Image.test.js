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
});
