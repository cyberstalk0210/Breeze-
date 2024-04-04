import React, { Component } from 'react'
import App from '../../App';
class data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "weather", link: "fa-solid fa-cloud-sun-rain", id: 1 },
        { name: "Cities", link: "fa-solid fa-list", id: 2 },
        { name: "Map", link: "fa-solid fa-map", id: 3 },
        { name: "Setting", link: "fa-solid fa-sliders", id: 4 }
      ],
      forecast: [
        { time: "6:00 AM", link: "/img/sun.png", temp: 25, key: 1 },
        { time: "9:00 AM", link: "/img/rain.png", temp: "28 ", key: 2 },
        { time: "12:00 PM", link: "/img/rain.png", temp: "33", key: 3 },
        { time: "3:00 PM", link: "/img/rain.png", temp: "34", key: 4 },
        { time: "6:00 PM", link: "/img/rain.png", temp: "32", key: 5 },
        { time: "9:00 PM", link: "/img/rain.png", temp: "30", key: 6 },
      ],
      weekdays: [
        { day: "Today", link: "/img/sunny.png", text: "Sunny", temp: "36/22", key: 1 },
        { day: "Tue", link: "/img/sunny.png", text: "Sunny", temp: "37/21", key: 2 },
        { day: "Wed", link: "/img/sunny.png", text: "Sunny", temp: "37/21", key: 3 },
        { day: "Thu", link: "/img/cloud.png", text: "Cloudy", temp: "37/21", key: 4 },
        { day: "Fri", link: "/img/cloud.png", text: "Cloudy", temp: "37/21", key: 5 },
        { day: "Sat", link: "/img/rain.png", text: "Rainy", temp: "37/21", key: 6 },
        { day: "Sun", link: "/img/sun.png", text: "Sunny", temp: "37/21", key: 7 },
      ]
    }
  }
  render() {
    return (
      <App props={this.state.data} />
    )
  }
}
export default data
