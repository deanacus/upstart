import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useBorder } from '../../useBorder/useBorder';

describe('useBorder hook', () => {
  test('it should return the correct value', async () => {
    const { result } = renderHook(() => useBorder('primary'));
    expect(result.current).toBe(Theme.borders.primary);
  });
});
