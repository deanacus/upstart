import React from 'react';
import { render } from '../../helpers/test-utils';
import { Collapsible } from '../../../components';

describe('<Collapsible />', () => {
  it('should render', () => {
    const { container } = render(
      <Collapsible className="test-collapsible">Content</Collapsible>,
    );
    const collapsible = container.querySelector('.test-collapsible');
    expect(collapsible).not.toBe(undefined);
  });

  it('should render expanded if the collapsed prop is false', () => {
    const { container } = render(
      <Collapsible className="test-collapsible" collapsed={false}>Content</Collapsible>,
    );
    const collapsible = container.querySelector('.test-collapsible');
    expect(collapsible).not.toHaveStyleRule('height', '0');
  });

  it('should render expanded if no collapsed prop is passed', () => {
    const { container } = render(
      <Collapsible className="test-collapsible">Content</Collapsible>,
    );
    const collapsible = container.querySelector('.test-collapsible');
    expect(collapsible).not.toHaveStyleRule('height', '0');
  });

  it('should render collapsed if the collapsed prop is true', () => {
    const { container } = render(
      <Collapsible className="test-collapsible" collapsed>Content</Collapsible>,
    );
    const collapsible = container.querySelector('.test-collapsible');
    expect(collapsible).toHaveStyleRule('height', '0');
  });
});
