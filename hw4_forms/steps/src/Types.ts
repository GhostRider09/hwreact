export type TIconButtonProps = {
  icon: string,
  onClick: VoidFunction
}

export type TListItem = {
  id: number,
  date: string,
  distance: number
}

export type TListItemProps = {
  item: TListItem
  onChangeList: React.Dispatch<React.SetStateAction<TListItem[]>>
}

export type TStepsListProps = {
  list: TListItem[],
  onChangeList: React.Dispatch<React.SetStateAction<TListItem[]>>
}