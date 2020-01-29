import { useTheme } from '../useTheme/useTheme';
import { usePreferredUnit } from '../usePreferredUnit/usePreferredUnit';

export const useRadius = (rad) => {
  const { radii } = useTheme();
  return usePreferredUnit(radii[rad]);
};

export default useRadius;
