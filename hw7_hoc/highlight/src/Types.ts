type TItemKind = 'video' | 'article';

export type TItemList = {
  type: TItemKind,
  views: number
  url?: string,
  title?: string
}