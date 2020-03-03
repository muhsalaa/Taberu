import { ms } from '../../helpers';

/**
 * ALIGNMENT AND JUSTIFICATIONS
 */

export const items_center = {
  alignItems: 'center',
};

export const justify_center = {
  justifyContent: 'center',
};

export const justify_between = {
  justifyContent: 'space-between',
};

/**
 * CENTER
 */

export const centering = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const center = {
  flex: 1,
  ...centering,
};

/**
 * ROW
 */

export const row = {
  flexDirection: 'row',
};

export const rowFull = {
  ...row,
  width: '100%',
};

export const rowFlex = {
  ...row,
  flex: 1,
};

export const rowFullCenter = {
  ...rowFull,
  ...items_center,
};

export const rowFlexCenter = {
  ...rowFlex,
  ...items_center,
};

/**
 * BORDER RADIUS
 */

export const rounded_sm = {
  borderRadius: ms(7),
};

export const rounded_md = {
  borderRadius: ms(10),
};

export const rounded_full = {
  borderRadius: ms(200),
};


