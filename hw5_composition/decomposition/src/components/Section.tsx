import { ReactNode } from 'react'

export default function Section({title, children}: {
  title: string,
  children?: ReactNode
}) {
  return (
    <div className="section">
      <div className="section__title">{title}</div>
      {children}
    </div>
  )
}