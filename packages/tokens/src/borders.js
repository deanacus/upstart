import { colors } from './colors';

export const borderWidths = [1, 2, 3, 4, 8];

[
  borderWidths.xs,
  borderWidths.sm,
  borderWidths.md,
  borderWidths.lg,
  borderWidths.xl,
] = borderWidths;

export const borders = [
];

[
  borders.grey,
  borders.primary,
  borders.secondary,
  borders.success,
  borders.warning,
  borders.error,
] = borders;

borders.separator = borders.grey;
borders.thin = borders.grey;

export const borderVariants = [
  'solid',
];

export const radii = [3, 5, 7, 20];

[
  radii.sm,
  radii.md,
  radii.lg,
  radii.pill,
] = radii;

radii.circle = 50;
