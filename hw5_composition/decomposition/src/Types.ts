type TSectionLinkType = "popular" | "media" | "tv"

export type TLink = {
  title: string,
  url: string,
  type?: TSectionLinkType,
  hint?: string,
  time?: string,
};

export type THotLink = {
  title: string,
  url: string,
  active: 1 | 0
}

export type THotNewsItem = {
  title: string,
  url: string,
  icon: string
}

export type TCurrency = {
  title: string,
  value: number,
  change: string
}

export type TPromoLinkProps = {
  title: string,
  url: string,
  image: string
  desc?: string,
}