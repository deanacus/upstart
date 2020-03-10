import React from 'react';
import { render } from '../../helpers/test-utils';
import { ListItem, Theme, getRem } from '../../../components';

describe('<ListItem />', () => {
  it('should render', () => {
    const { container } = render(
      <ListItem className="test-item">
        Children
      </ListItem>,
    );
    const item = container.querySelector('.test-item');
    expect(item).not.toBe(undefined);
  });

  it('should render with correct padding', () => {
    const { container } = render(
      <ListItem className="test-item" padding="py-2">
        Children
      </ListItem>,
    );
    const expectedPaddingValue = getRem(Theme.space[2]);
    const item = container.querySelector('.test-item');
    expect(item).not.toBe(undefined);
    expect(item).toHaveStyleRule('padding-bottom', expectedPaddingValue);
    expect(item).toHaveStyleRule('padding-top', expectedPaddingValue);
  });
});
