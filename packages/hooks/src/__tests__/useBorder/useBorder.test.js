import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useBorder } from '../../useBorder/useBorder';

describe('useBorder hook', () => {
  test('it should return a string in the format of \'<%=Number=%>rem solid <%=Color=%>', async () => {
    const { result } = renderHook(() => useBorder('primary'));
    expect(result.current).toBe(Theme.borders.primary);
  });
});
