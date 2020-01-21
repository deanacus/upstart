import React from 'react';
import { render } from '@testing-library/react';
import { Image } from './Image';

describe('<Image />', () => {
  it('should render', () => {
    const { container } = render(
      <Image className="test-image">
        Children
      </Image>,
    );
    const image = container.querySelector('.test-image');
    expect(image).not.toBe(undefined);
  });
});
