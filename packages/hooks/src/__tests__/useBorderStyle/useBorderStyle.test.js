import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useBorderStyle } from '../../useBorderStyle/useBorderStyle';

describe(' hook', () => {
  test('It should return the correct value', () => {
    const { result } = renderHook(() => useBorderStyle(1));
    expect(result.current).toBe(Theme.borderStyles[1]);
  });
});
