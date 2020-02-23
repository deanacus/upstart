import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useLineHeight } from '../../useLineHeight/useLineHeight';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useLineHeight('body'));
    expect(result.current).toBe(`line-height: ${Theme.lineHeights.body}`);
  });
});
