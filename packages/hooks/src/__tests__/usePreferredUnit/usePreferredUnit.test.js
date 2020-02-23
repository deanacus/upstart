import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { usePreferredUnit } from '../../usePreferredUnit/usePreferredUnit';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => usePreferredUnit(16));
    expect(result.current).toBe(`${16 / Theme.rootVal}rem`);
  });
});
