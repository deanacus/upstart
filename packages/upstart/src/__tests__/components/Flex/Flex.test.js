import React from 'react';
import { render } from '../../helpers/test-utils';
import { Flex, Theme } from '../../../components';
import { getRem } from '../../../utils/styled-utils';

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

  it('should add margin to children when margin is passed in.', () => {
    const { container } = render(
      <Flex className="test-flex" margin="mx-2">
        <div className="child" />
      </Flex>,
    );

    const flex = container.querySelector('.child');
    expect(flex).toHaveStyle(`margin-left: ${getRem(Theme.space[2], Theme.rootVal)}`);
  });

  it('should have the correct justify-content value from the passed in string', () => {
    const { container } = render(
      <Flex className="test-flex" justify="end">
        Children
      </Flex>,
    );

    const flex = container.querySelector('.test-flex');
    expect(flex).toHaveStyle('justify-content: flex-end');
  });

  it('should have the correct align-items value from the passed in string', () => {
    const { container } = render(
      <Flex className="test-flex" align="stretch">
        Children
      </Flex>,
    );

    const flex = container.querySelector('.test-flex');
    expect(flex).toHaveStyle('align-items: stretch');
  });

  it('should have the correct align-content value from the passed in string', () => {
    const { container } = render(
      <Flex className="test-flex" align="baseline">
        Children
      </Flex>,
    );

    const flex = container.querySelector('.test-flex');
    expect(flex).toHaveStyle('align-content: baseline');
  });
});
