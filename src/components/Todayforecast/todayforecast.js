import './todayforecast.css'
import ForecastItems from '../ForecastItems/ForecastItems'

const Todayforecast = function Todayforecast({ props }) {
  return (
    <div>
      <div className="container">
        <div className="title" >
          <p>Today's Forecast</p>
          <div className="group">

            {props.map(item => (
              <ForecastItems
                time={item.time}
                temp={item.temp}
                link={item.link}
                key={item.key}
              />

            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Todayforecast