'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountDown = function (_React$Component) {
  _inherits(CountDown, _React$Component);

  function CountDown(props) {
    _classCallCheck(this, CountDown);

    var _this = _possibleConstructorReturn(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call(this, props));

    _this.interval = null;
    _this.tick = false;
    _this.state = {
      count: _this.props.from
    };
    return _this;
  }

  _createClass(CountDown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.registerInterval();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unregisterInterval();
    }
  }, {
    key: 'registerInterval',
    value: function registerInterval() {
      this.tick = true;
      this.updateInterval();
    }
  }, {
    key: 'unregisterInterval',
    value: function unregisterInterval() {
      this.tick = false;
      this.updateInterval();
    }
  }, {
    key: 'updateInterval',
    value: function updateInterval() {
      if (!this.tick && this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      } else if (this.tick && !this.interval) {
        this.interval = setInterval(this.update.bind(this), 1000 * this.props.interval);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.state.count === this.props.to) {
        this.props.onComplete();
        this.unregisterInterval();
      } else if (this.props.type === '+') {
        this.add();
      } else if (this.props.type === '-') {
        this.minus();
      }
    }
  }, {
    key: 'add',
    value: function add() {
      var count = this.state.count;
      count++;
      this.setState({
        count: count
      });
      this.updateInterval();
    }
  }, {
    key: 'minus',
    value: function minus() {
      var count = this.state.count;
      count--;
      this.setState({
        count: count
      });
      this.updateInterval();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.count,
        ' ',
        this.props.addon
      );
    }
  }]);

  return CountDown;
}(_react2.default.Component);

CountDown.propTypes = {
  from: _react2.default.PropTypes.number,
  to: _react2.default.PropTypes.number,
  interval: _react2.default.PropTypes.number,
  type: _react2.default.PropTypes.string,
  addon: _react2.default.PropTypes.string,
  onComplete: _react2.default.PropTypes.func
};
module.exports = CountDown;
