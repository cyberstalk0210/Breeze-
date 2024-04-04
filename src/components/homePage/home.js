import './home.css'
const home = function home({ props, main }) {
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
              {/* <h1 className='text'> {console.log(props.main.temp)}&deg;</h1> */}
            </div>
          </div>
          <div className="weather-icon">
            <div className="image-sun">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home