import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useShadow } from '../../useShadow/useShadow';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useShadow(0));
    expect(result.current).toBe(Theme.shadows[0]);
  });
});
