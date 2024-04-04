import './airconditions.css'

const Feel = function feel({ title, link, temp }) {
  return (
    <div className="feel">
      <div className="feel-title">
        <i className={`${link}`}></i>
        <span>{title}</span>
      </div>
      <div className="feel-temp">
        <p>{temp}</p>
      </div>

    </div>
  )
}

const airconditions = () => {
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
          <Feel title="Real Feel" link="fas fa-temperature-half" temp="20 &deg;" />
          <Feel title="wind" link="fas fa-wind" temp="0.2 km/h" />
          <Feel title="Chance of rain" link="fa-solid fa-droplet" temp="0 %" />
          <Feel title="UV Index" link="fa-solid fa-sun" temp="3" />

        </div>
      </div>
    </div>
  )
}
export default airconditions