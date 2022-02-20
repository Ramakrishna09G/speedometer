// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  applyBraks = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-page-bg-container">
        <div className="speedometer-page-container">
          <h1 className="main-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-img"
          />
          <h1 className="sub-heading">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph, Max limit is 200mph</p>
          <div>
            <button
              type="button"
              className="accelerate button"
              onClick={this.accelerate}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="apply-breaks button"
              onClick={this.applyBraks}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
