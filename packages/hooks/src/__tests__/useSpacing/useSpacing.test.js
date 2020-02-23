import { Theme } from '@deanacus/upstart';
import { renderHook } from '../helpers/test-utils';
import { useSpacing } from '../../useSpacing/useSpacing';

describe(' hook', () => {
  test('Should return the correct value', () => {
    const { result } = renderHook(() => useSpacing('p-0'));
    expect(result.current).toBe(`padding: ${Theme.space[0] / Theme.rootVal}rem;`);
  });
});
