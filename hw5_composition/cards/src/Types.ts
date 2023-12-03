export type TButtonType = 'primary' | 'info' | 'warning';

export type TCardProps = {
  title: string,
  text: string,
  buttonTitle: string,
  url: string,
  variant?: TButtonType,
  children?: JSX.Element
}

export type TLinkButtonProps = {
  title: string,
  url: string
  variant?: TButtonType,
}