import { Theme } from '@deanacus/upstart';
import { renderHook } from '../utils/test-utils';
import { useBorder } from './useBorder';

describe('useBorder hook', () => {
  test('it should return a string in the format of \'<%=Number=%>px solid <%=Color=%>', async () => {
    const { result } = renderHook(() => useBorder('primary'));
    expect(result.current).toBe(Theme.borders.primary);
  });
});
