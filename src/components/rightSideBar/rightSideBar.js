import { Component } from 'react'
import './rightSideBar.css'

class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { day, text, link, temp } = this.props
    return (
      <div className="cards" >
        <div className="card-bodies">
          <h5 className="days">{day} </h5>
          <div className="w-image">
            <img src={link} alt="" />
          </div>
          <p className="weather-info">{text}</p>
          <p className='w-temp'>{temp}</p>
        </div>
      </div>
    )
  }
}

const rightSideBar = function rightSideBar({ props }) {
  return (
    <>
      <div className="allCard pt-4">
        <div className="title-s">
          <p>7-day Forecast</p>
        </div>
        <div className="component">
          {props.map(item => (
            <Card
              day={item.day}
              info={item.info}
              link={item.link}
              text={item.text}
              temp={item.temp}
            />
          ))}
        </div>

      </div>
    </>
  )
}
export default rightSideBar