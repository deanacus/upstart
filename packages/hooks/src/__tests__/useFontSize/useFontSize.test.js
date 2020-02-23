import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useFontSize } from '../../useFontSize/useFontSize';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useFontSize(0));
    expect(result.current).toBe(`font-size: ${Theme.fontSizes[0] / Theme.rootVal}rem`);
  });
});
