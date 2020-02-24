import { Theme } from '@deanacus/upstart';
import { renderHook, act } from '../helpers/test-utils';
import { useBreakpoint } from '../../useBreakpoint/useBreakpoint';

afterEach(() => {
  global.window.innerWidth = 1024;
});

describe('useBreakpoint hook', () => {
  it('should return the correct value for 1300px', () => {
    global.window.innerWidth = 1500;
    const { result, unmount } = renderHook(() => useBreakpoint(Theme));
    expect(result.current.breakpoint).toBe('xxl');
    unmount();
  });

  it('should return the correct value', () => {
    global.window.innerWidth = 1300;
    const { result, unmount } = renderHook(() => useBreakpoint(Theme));
    expect(result.current.breakpoint).toBe('xl');
    unmount();
  });

  it('should return the correct value', () => {
    global.window.innerWidth = 1000;
    const { result, unmount } = renderHook(() => useBreakpoint(Theme));
    expect(result.current.breakpoint).toBe('lg');
    unmount();
  });

  it('should return the correct value', () => {
    global.window.innerWidth = 800;
    const { result, unmount } = renderHook(() => useBreakpoint(Theme));
    expect(result.current.breakpoint).toBe('md');
    unmount();
  });

  it('should return the correct value', () => {
    global.window.innerWidth = 600;
    const { result, unmount } = renderHook(() => useBreakpoint(Theme));
    expect(result.current.breakpoint).toBe('sm');
    unmount();
  });

  it('should return the correct value', () => {
    global.window.innerWidth = 300;
    const { result, unmount } = renderHook(() => useBreakpoint(Theme));
    expect(result.current.breakpoint).toBe('xs');
    unmount();
  });

  it('should update when the window resizes', async () => {
    global.window.innerWidth = 1300;
    const { result, waitForNextUpdate, unmount } = renderHook(() => useBreakpoint(Theme));
    const initialBp = result.current.breakpoint;
    act(() => {
      global.window.innerWidth = 1024;
      global.window.dispatchEvent(new Event('resize'));
    });
    await waitForNextUpdate();
    const resizeBp = result.current.breakpoint;
    expect(initialBp).not.toBe(resizeBp);
    unmount();
  });
});
