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
  `${borderWidths.xs} solid ${colors.grey[2]}`,
  `${borderWidths.xs} solid ${colors.success[2]}`,
  `${borderWidths.xs} solid ${colors.warning[2]}`,
  `${borderWidths.xs} solid ${colors.error[2]}`,
];

[
  borders.grey,
  borders.success,
  borders.warning,
  borders.error,
] = borders;

borders.separator = borders.grey;
borders.thin = borders.grey;

export const radii = [3, 5, 7];

[
  radii.sm,
  radii.md,
  radii.lg,
] = radii;

radii.pill = 20;
radii.circle = 50;
