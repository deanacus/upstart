import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useTheme } from '../../useTheme/useTheme';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current).toStrictEqual(Theme);
  });
});
