import React from 'react';
import { render } from '../../utils/test-utils';
import { Flex } from './Flex';

describe('<Flex />', () => {
  it('should render', () => {
    const { container } = render(
      <Flex className="test-flex">
        Children
      </Flex>,
    );
    const flex = container.querySelector('.test-flex');
    expect(flex).not.toBe(undefined);
  });
});
