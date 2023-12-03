import {ReactNode} from 'react'

export default function Banner({children}: {children?: ReactNode}) {
  return (
    <div className="banner">
      {children}
    </div>
  )
}