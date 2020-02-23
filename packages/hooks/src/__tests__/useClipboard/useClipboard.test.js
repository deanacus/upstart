import { renderHook } from '../helpers/test-utils';
import { useClipboard } from '../../useClipboard/useClipboard';

describe(' hook', () => {
  xtest('Should return the correct value', () => {
    const { result } = renderHook(() => useClipboard('test string'));
    expect(result.current).toBe('something');
  });
});
