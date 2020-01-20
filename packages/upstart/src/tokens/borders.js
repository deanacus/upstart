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
  `${borderWidths.xs}px solid ${colors.grey[4]}`,
  `${borderWidths.xs}px solid ${colors.primary[4]}`,
  `${borderWidths.xs}px solid ${colors.secondary[4]}`,
  `${borderWidths.xs}px solid ${colors.success[4]}`,
  `${borderWidths.xs}px solid ${colors.warning[4]}`,
  `${borderWidths.xs}px solid ${colors.error[4]}`,
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

export const borderStyles = [
  'solid',
  'dashed',
  'dotted',
];

export const radii = [3, 5, 7, 20];

[
  radii.sm,
  radii.md,
  radii.lg,
  radii.pill,
] = radii;

radii.circle = 50;
