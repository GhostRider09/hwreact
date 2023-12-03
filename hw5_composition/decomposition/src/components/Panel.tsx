export default function Panel({children}: {children: JSX.Element[]}) {
  return (
    <div className="panel">
      {children}
    </div>
  )
}