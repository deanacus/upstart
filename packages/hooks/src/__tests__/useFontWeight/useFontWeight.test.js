import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useFontWeight } from '../../useFontWeight/useFontWeight';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useFontWeight(0));
    expect(result.current).toBe(`font-weight: ${Theme.fontWeights[0]}`);
  });
});
