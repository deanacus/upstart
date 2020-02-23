import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useColor } from '../../useColor/useColor';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useColor('primary'));
    expect(result.current).toBe(Theme.colors.primary[5]);
  });
});
