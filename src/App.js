import HomePage from './components/homePage/home'
import SearchPanel from './components/searchBar/searchBar'
import SideBar from './components/sideBar/sideBar'
import './App.css';
import Todayforecast from './components/Todayforecast/todayforecast'
import Airconditions from './components/AirConditions/airconditions';
import RightSideBar from './components/rightSideBar/rightSideBar';
import { Component } from 'react';
// import data from './components/data/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: [
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
      , Weatherdata: [],
      response: [],
      main: [],
      location: [
        "Uzbekistan"
      ],
      wind: [],
    }
    const states = this.state
    // eslint-disable-next-line no-restricted-globals
    this.Api_url = `https://api.openweathermap.org/data/2.5/weather?q=${states.location}&units=metric&appid=f2cde4bd2f2fe1241dd80c27a8c44164`
  }
  componentDidMount() {
    fetch(this.Api_url).then(res => res.json())
      .then(response => this.setState({
        Weatherdata: response.weather,
        response: response,
        main: response.main,
        location: response.name,
        wind: response.wind,
      }))
  }

  searchHandler = (e) => {
    const location = e
    this.setState(() => {
      return {
        location: location
      }
    })
  }

  render() {
    const data = this.state
    // console.log(data.data);
    return (
      <div className='containers' >

        <div className='side-bar'>
          <SideBar props={data.icon} />
        </div>

        <div className='home-page'>
          <SearchPanel searchHandler={this.searchHandler} />
          <HomePage props={data.response} main={data.main} weather={data.Weatherdata} />
          <Todayforecast props={data.forecast} />

          <Airconditions wind={data.wind} main={data.main} weather={data.Weatherdata} rain={data.response.rain} />
        </div>

        <div className='right-bar'>
          <RightSideBar props={data.weekdays} />
        </div>

      </div>
    )
  }
}

export default App;
