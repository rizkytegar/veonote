import  { Component } from "react";
import { DateTime } from "luxon";

interface ClockProps {
  zone: string; // Prop for time zone
}

interface ClockState {
  currentTime: DateTime;
}

export default class Clock extends Component<ClockProps, ClockState> {
    private timerId?: ReturnType<typeof setTimeout>;
  
    constructor(props: ClockProps) {
    super(props);
    this.state = {
      currentTime: DateTime.now().setZone(props.zone), // Set initial time based on the zone
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: DateTime.now().setZone(this.props.zone) }); // Update time based on the zone
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div className="clock">
        {/* Hour markers */}
        <div className="clock-numbers">
          <span className="twelve">12</span>
          <span className="one">1</span>
          <span className="two">2</span>
          <span className="three">3</span>
          <span className="four">4</span>
          <span className="five">5</span>
          <span className="six">6</span>
          <span className="seven">7</span>
          <span className="eight">8</span>
          <span className="nine">9</span>
          <span className="ten">10</span>
          <span className="eleven">11</span>
        </div>

        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${currentTime.hour * 30 + currentTime.minute * 0.5}deg)` // Use currentTime
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${currentTime.minute * 6}deg)` // Use currentTime
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${currentTime.second * 6}deg)` // Use currentTime
          }}
        />
        {/* <div className="text">{currentTime.toFormat("HH:mm:ss")}</div> */}
      </div>
    );
  }
}