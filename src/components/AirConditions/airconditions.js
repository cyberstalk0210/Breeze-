import './airconditions.css'

const Feel = function feel({ title, link, temp, deg, persentage, speed }) {
  return (
    <div className="feel">
      <div className="feel-title">
        <i className={`${link}`}></i>
        <span>{title}</span>
      </div>
      <div className="feel-temp">
        <p>{temp} {deg} {persentage} {speed}</p>
      </div>

    </div>
  )
}

const airconditions = ({ wind, main, rain }) => {
  return (
    <div>
      <div className="container pt-3 airconditions">
        <div className=" title-b d-flex justify-content-space-between" >
          <p className='pt-1'>Air Conditions</p>
          <button type="button" className="btn-condition btn btn-primary " >
            see more
          </button>

        </div>
        <div className='feels'>
          <Feel title="Real Feel" link="fas fa-temperature-half" temp={main.temp} deg="&deg;" />
          <Feel title="wind" link="fas fa-wind" temp={wind.speed} speed={"km/h"} />
          <Feel title="Chance of rain" link="fa-solid fa-droplet" temp={rain} persentage="0 %" />
          <Feel title="Humidity" link="fa-solid fa-sun" temp={main.humidity} persentage="%" />

        </div>
      </div>
    </div>
  )
}
export default airconditions