import React from 'react';
import { render } from 'test-utils';

import { Row, Theme } from '../../../components';
import { getRem } from '../../../utils/styled-utils';

describe('<Row />', () => {
  it('should render', () => {
    const { container } = render(
      <Row className="test-row">
        Children
      </Row>,
    );
    const row = container.querySelector('.test-row');
    expect(row).not.toBe(undefined);
  });


  it('should not allow row-items to wrap by default', () => {
    const { container } = render(
      <Row className="test-row">
        Children
      </Row>,
    );
    const row = container.querySelector('.test-row');
    expect(row).toHaveStyle('flex-wrap: no-wrap');
  });

  it('should allow row-items to wrap when canWrap is passed', () => {
    const { container } = render(
      <Row className="test-row" canWrap>
        Children
      </Row>,
    );
    const row = container.querySelector('.test-row');
    expect(row).toHaveStyle('flex-wrap: wrap');
  });

  it('should be a reversed row when isReverse is set', () => {
    const { container } = render(
      <Row className="test-row" isReverse>
        Children
      </Row>,
    );
    const row = container.querySelector('.test-row');
    expect(row).toHaveStyle('flex-direction: row-reverse');
  });

  it('should have a padding value that matches the passed in string', () => {
    const { container } = render(
      <Row className="test-row" padding="px-2">
        Children
      </Row>,
    );

    const row = container.querySelector('.test-row');
    expect(row).toHaveStyle(`padding-left: ${getRem(Theme.space[2], Theme.rootVal)}`);
  });

  it('should have the correct justify-content value from the passed in string', () => {
    const { container } = render(
      <Row className="test-row" justify="end">
        Children
      </Row>,
    );

    const row = container.querySelector('.test-row');
    expect(row).toHaveStyle('justify-content: flex-end');
  });

  it('should have the correct align-items value from the passed in string', () => {
    const { container } = render(
      <Row className="test-row" align="stretch">
        Children
      </Row>,
    );

    const row = container.querySelector('.test-row');
    expect(row).toHaveStyle('align-items: stretch');
  });
});
