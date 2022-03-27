

export enum SortEnum {
  Name,
  City,
}

export type SortAction =
  | { type: SortEnum.Name }
  | { type: SortEnum.City }
  | { type: 'reset'; initialState: UserModel[] };

export interface SortReducerState {
  sort: SortEnum;
  users: UserModel[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortAction,
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Name:
      return {
        sort: SortEnum.Name,
        users: state.users.sort((a, b) => (a.name > b.name ? -1 : 1)),
      };
    case SortEnum.City:
      return {
        sort: SortEnum.City,
        users: state.users.sort((a, b) =>
          a.address.city > b.address.city ? 1 : -1,
        ),
      };
    case 'reset':
      return {
        sort: SortEnum.Name,
        users: action.initialState,
      };

    default:
      throw new Error('Неверный тип сортировки');
  }
};
