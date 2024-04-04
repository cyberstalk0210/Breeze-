import React, { Component } from 'react'
import "./icons.css"

class icons extends Component {
  constructor(props) {
    super(props)

  }

  onchange = () => {
    const text = document.querySelector('.text'),
      emoji = document.querySelector('.emoji')
    emoji.classList.toggle('change')
    text.classList.toggle('change')
  }

  render() {
    const { name, link } = this.props
    return (
      < div className='mt-3 icons' >
        <button className='btn' onClick={this.onchange}>
          <i className={`${link} emoji`} ></i>
          <p className='pt-2 text' >{`${name} `}</p>
        </button>
      </div >
    )
  }
}
export default icons