import React, { PropTypes } from 'react';

class CountDown extends React.Component {

  constructor(props) {
    super(props);
    this.interval = null;
    this.tick = false;
    this.state = {
      count: this.props.from
    };
  }

  componentDidMount () {
    this.registerInterval()
  }

  componentWillUnmount () {
    this.unregisterInterval()
  }

  registerInterval() {
    this.tick = true;
    this.updateInterval();
  }

  unregisterInterval() {
    this.tick = false;
    this.updateInterval();
  }

  updateInterval() {
    if (!this.tick && this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else if (this.tick && !this.interval) {
      this.interval = setInterval(this.update.bind(this), 1000 * this.props.interval);
    }
  }

  update() {
    if (this.state.count === this.props.to) {
      this.props.onComplete();
      this.unregisterInterval()
    } else if (this.props.type === '+'){
      this.add();
    } else if (this.props.type === '-') {
      this.minus();
    }
  }

  add() {
    let count = this.state.count;
    count++;
    this.setState({
      count: count
    });
    this.updateInterval();
  }

  minus() {
    let count = this.state.count;
    count--;
    this.setState({
      count: count
    });
    this.updateInterval();
  }

  render() {
    return (
      <div>
        {this.state.count} {this.props.addon}
      </div>
    );
  }

}

CountDown.propTypes = {
  from: React.PropTypes.number,
  to: React.PropTypes.number,
  interval: React.PropTypes.number,
  type: React.PropTypes.string,
  addon: React.PropTypes.string,
  onComplete: React.PropTypes.func
};
module.exports = CountDown;
