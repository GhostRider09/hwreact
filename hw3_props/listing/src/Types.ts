export type TListingItem = {
  listing_id: number,
  url: string,
  title: string,
  price: string,
  quantity: number,
  currency_code: string,
  MainImage?: string,
}

export type TListingSourceItem = {
  listing_id: number,
  url: string,
  title: string,
  price: string,
  quantity: number,
  currency_code: string,
  MainImage?: {
      url_570xN: string
  },
}

export type TListingProperties = {
  items: TListingItem[]
}

export type TItemProperties = {
  item: TListingItem
}