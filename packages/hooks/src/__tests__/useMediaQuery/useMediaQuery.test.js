import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useMediaQuery } from '../../useMediaQuery/useMediaQuery';

describe(' hook', () => {
  xtest('Should return the correct value', () => {
    const { result } = renderHook(() => useMediaQuery(0));
    expect(result.current).toBe(`font-weight: ${Theme.fontWeights[0]}`);
  });
});
