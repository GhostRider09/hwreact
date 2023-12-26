export const ReturnButton = ({handleClick, children}: {
  handleClick: React.MouseEventHandler
  children?: string
}) => {
  return (
    <button className="btn return-buttons" type="button" onClick={handleClick}>{children || "Назад"}</button>
  )
}