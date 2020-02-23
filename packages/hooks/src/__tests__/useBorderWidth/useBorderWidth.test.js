import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useBorderWidth } from '../../useBorderWidth/useBorderWidth';

describe('useBorderWidth hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useBorderWidth(0));
    expect(result.current).toBe(`${Theme.borderWidths[0] / Theme.rootVal}rem`);
  });
});
