import React from 'react';
import { render } from '../../helpers/test-utils';
import { Input } from '../../../components';

describe('<Input />', () => {
  it('should render', () => {
    const { container } = render(
      <Input className="test-input" id="test-input">
        Children
      </Input>,
    );
    const input = container.querySelector('.test-input');
    expect(input).not.toBe(undefined);
  });

  it('should render the label by default', () => {
    const { container } = render(
      <Input className="test-input" id="test-input">
        Test input
      </Input>,
    );
    const input = container.querySelector('.test-input').textContent;
    expect(input).toBe('Test input');
  });

  it('should render a text input by default', () => {
    const { container } = render(
      <Input className="test-input" id="test-input">
        Test input
      </Input>,
    );
    const input = container.querySelector('.test-input-input').getAttribute('type');
    expect(input).toBe('text');
  });

  it('should render an email input', () => {
    const { container } = render(
      <Input className="test-input" id="test-input" type="email">
        Test input
      </Input>,
    );
    const input = container.querySelector('.test-input-input').getAttribute('type');
    expect(input).toBe('email');
  });

  it('should render a tel input', () => {
    const { container } = render(
      <Input className="test-input" id="test-input" type="tel">
        Test input
      </Input>,
    );
    const input = container.querySelector('.test-input-input').getAttribute('type');
    expect(input).toBe('tel');
  });

  it('should render a number input', () => {
    const { container } = render(
      <Input className="test-input" id="test-input" type="number">
        Test input
      </Input>,
    );
    const input = container.querySelector('.test-input-input').getAttribute('type');
    expect(input).toBe('number');
  });

  it('should render a date input', () => {
    const { container } = render(
      <Input className="test-input" id="test-input" type="date">
        Test input
      </Input>,
    );
    const input = container.querySelector('.test-input-input').getAttribute('type');
    expect(input).toBe('date');
  });

  it('should render a search input', () => {
    const { container } = render(
      <Input className="test-input" id="test-input" type="search">
        Test input
      </Input>,
    );
    const input = container.querySelector('.test-input-input').getAttribute('type');
    expect(input).toBe('search');
  });
});
