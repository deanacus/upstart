import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useElevation } from '../../useElevation/useElevation';

describe(' hook', () => {
  xtest('Should return the correct value', () => {
    const { result } = renderHook(() => useElevation(0));
    expect(result.current).toBe(Theme.elevations[0]);
  });
});
