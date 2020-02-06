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

  it('should not allow flex-items to wrap by default', () => {
    const { container } = render(
      <Flex className="test-flex">
        Children
      </Flex>,
    );
    const flex = container.querySelector('.test-flex');
    expect(flex).toHaveStyle('flex-wrap: no-wrap');
  });

  it('should allow flex-items to wrap when canWrap is passed', () => {
    const { container } = render(
      <Flex className="test-flex" canWrap>
        Children
      </Flex>,
    );
    const flex = container.querySelector('.test-flex');
    expect(flex).toHaveStyle('flex-wrap: wrap');
  });

  it('should be a flex-row by default', () => {
    const { container } = render(
      <Flex className="test-flex">
        Children
      </Flex>,
    );
    const flex = container.querySelector('.test-flex');
    expect(flex).toHaveStyle('flex-direction: row');
  });

  it('should be a flex-column by when direction="column"', () => {
    const { container } = render(
      <Flex className="test-flex" direction="column">
        Children
      </Flex>,
    );
    const flex = container.querySelector('.test-flex');
    expect(flex).toHaveStyle('flex-direction: column');
  });

  it('should be a reversed row when isReverse passed in and no direction', () => {
    const { container } = render(
      <Flex className="test-flex" isReverse>
        Children
      </Flex>,
    );
    const flex = container.querySelector('.test-flex');
    expect(flex).toHaveStyle('flex-direction: row-reverse');
  });

  it('should be a reversed column when isReverse passed in and direction="column"', () => {
    const { container } = render(
      <Flex className="test-flex" direction="column" isReverse>
        Children
      </Flex>,
    );
    const flex = container.querySelector('.test-flex');
    expect(flex).toHaveStyle('flex-direction: column-reverse');
  });

  xit('should have a margin value that matches the passed in string', () => {});
  xit('should have the correct justify-content value from the passed in string', () => {});
  xit('should have the correct align-content value from the passed in string', () => {});
  xit('should have the correct align-items value from the passed in string', () => {});
});
