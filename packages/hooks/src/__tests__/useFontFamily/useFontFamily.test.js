import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useFontFamily } from '../../useFontFamily/useFontFamily';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useFontFamily('body'));
    expect(result.current).toBe(`font-family: ${Theme.fonts.body}`);
  });
});
