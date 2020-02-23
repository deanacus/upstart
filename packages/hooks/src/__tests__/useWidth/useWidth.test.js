import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useWidth } from '../../useWidth/useWidth';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useWidth(0));
    expect(result.current).toBe(`${Theme.widths[0] / Theme.rootVal}rem`);
  });
});
