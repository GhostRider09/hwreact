import {ReactNode} from 'react'

export default function ItemLink({children, classes}: {children: ReactNode, classes?: string}) {
  return (
    <div className={classes || ""}>
      {children}
    </div>
  )
}