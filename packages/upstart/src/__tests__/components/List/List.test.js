import React from 'react';
import { render } from '../../helpers/test-utils';
import { List, Theme, getRem } from '../../../components';

describe('<List />', () => {
  it('should render', () => {
    const { container } = render(
      <List className="test-list">
        Children
      </List>,
    );
    const list = container.querySelector('.test-list');
    expect(list).not.toBe(undefined);
  });

  it('should render an unordered list', () => {
    const { container } = render(
      <List className="test-list">
        Children
      </List>,
    );
    const list = container.querySelector('ul');
    expect(list).not.toBe(undefined);
  });

  it('should render an ordered list', () => {
    const { container } = render(
      <List className="test-list" isNumbered>
        Children
      </List>,
    );
    const list = container.querySelector('ol');
    expect(list).not.toBe(undefined);
  });

  it('should render with no bullets or padding ', () => {
    const { container } = render(
      <List className="test-list" marker="none">
        Children
      </List>,
    );
    const list = container.querySelector('ul');
    expect(list).toHaveStyleRule('list-style-type', 'none');
    expect(list).toHaveStyleRule('padding-left', '0');
  });

  it('should render with correct padding', () => {
    const { container } = render(
      <List className="test-list" padding="py-2">
        Children
      </List>,
    );
    const expectedPaddingValue = getRem(Theme.space[2]);
    const list = container.querySelector('.test-list');
    expect(list).toHaveStyleRule('padding-bottom', expectedPaddingValue);
    expect(list).toHaveStyleRule('padding-top', expectedPaddingValue);
  });
});
