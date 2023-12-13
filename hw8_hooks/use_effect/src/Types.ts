export type TUserListItem = {
  id: number,
  name: string
}

export type TUser = {
  id: number,
  name: string,
  avatar: string,
  details: TUserWork
}

export type TUserWork = {
  city: string,
  company: string,
  position: string
}