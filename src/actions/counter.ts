import { createAction } from "typesafe-actions";

export const plus = createAction(
  'PLUS',
)<number>();

export const minus = createAction(
  'MINUS',
)<number>();