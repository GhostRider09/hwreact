export default function Popular({children}:{children: JSX.Element}) {
  return (
      <div className="wrap-item wrap-item-popular">
          <span className="label">Popular!</span>
          {children}
      </div>
  )
};