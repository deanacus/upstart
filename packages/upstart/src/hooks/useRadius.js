import { useTheme } from './useTheme';
import { usePreferredUnit } from './usePreferredUnit';

export const useRadius = (rad) => {
  const { radii } = useTheme();
  return usePreferredUnit(radii[rad]);
};


export default useRadius;
