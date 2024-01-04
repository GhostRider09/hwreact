export type IReduxState = {
  registerBook: IStoreState
}

export type IStoreState = {
  inputPrice: string,
  inputTitle: string,
  editMode: boolean,
  editId: string,
  filterValue: string
  list: TItem[]
}

export type TItem = {
  id: string,
  title: string,
  price: number,
}

export type TReducerAction = {
  type: string,
  payload: any
}

export type TSwitchEditModePayload = {
  switchOn: boolean,
  id?: string
}