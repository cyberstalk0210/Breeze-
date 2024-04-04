import { Component } from 'react'
import './ForecastItems.css'

class ForecastItems extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { time, temp, link } = this.props
    return (
      < div className='container d-flex'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{time}</h5>
            <div className="card-img-top">
              <img src={link} alt='weather' />
            </div>
            <p className='card-text'>{temp}&deg;</p>
          </div>
        </div>
        <div className='card-line'></div>
      </div>
    )
  }
}

export default ForecastItems