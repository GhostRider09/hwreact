export default function Wether() {
  return (
    <div className="wether">
      <div className="wether__icon">
        <img src="https://static.dzeninfra.ru/weather/i/icons/funky/dark/ovc_ra_sn.svg" alt="" />
      </div>
      <div className="wether__current-temperature">-17</div>
      <div className="wether__other">
        <div className="wether__morning">Утром -17</div>
        <div className="wether__night">днём -20</div>
      </div>
    </div>
  )
}