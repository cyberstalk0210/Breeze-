import './home.css'
const home = function home({ props, main, weather }) {
  return (
    <div>
      <div className='container pb-3'>
        <div className="top-section ">
          <div className="cities-name pt-3" >
            {/* {console.log(props.name)} */}
            <h1>
              {props.name}
            </h1>
            <div className="gradus">
              <h1 className='text'> {main.temp}&deg;</h1>
              <p>{weather.map(item => (
                item.main
              ))}</p>
            </div>
          </div>
          <div className="weather-icon">
            <div className="image-sun">
              {weather.map(item => (
                item.icon
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default home