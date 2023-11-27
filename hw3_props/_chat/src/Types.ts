export type TMessageItem = {
  id: string,
  from: TAuthor,
  type: 'response' | 'message' | 'typing',
  time: string,
  text?: string,
}

export type TAuthor = {
  name: string
}

export type TMessage = {
  id: string,
  time: string,
  text?: string,
}

export type TItemProperties = {
  from: TAuthor,
  message: TMessage
}