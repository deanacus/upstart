import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useRadius } from '../../useRadius/useRadius';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useRadius(0));
    expect(result.current).toBe(`${Theme.radii[0] / Theme.rootVal}rem`);
  });
});
