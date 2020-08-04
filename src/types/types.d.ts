import { StateType, ActionType } from 'typesafe-actions';

// declare module 'AppTypes' {
  export type Store = StateType<typeof import('../store/store').store>;
  export type RootAction = ActionType<typeof import('../actions').default>;
  export type RootState = StateType<ReturnType<typeof import('../store/store').reducer>>;
// }

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('../actions').default>;
  }
}