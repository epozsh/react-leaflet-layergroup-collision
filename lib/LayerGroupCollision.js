'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

require('./collision.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayerGroupCollision = function (_MapLayer) {
  _inherits(LayerGroupCollision, _MapLayer);

  function LayerGroupCollision() {
    _classCallCheck(this, LayerGroupCollision);

    return _possibleConstructorReturn(this, (LayerGroupCollision.__proto__ || Object.getPrototypeOf(LayerGroupCollision)).apply(this, arguments));
  }

  _createClass(LayerGroupCollision, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        layerContainer: this.leafletElement
      };
    }
  }, {
    key: 'createLeafletElement',
    value: function createLeafletElement() {
      var t = _leaflet2.default.layerGroup.collision({ margin: 20 }, this.getOptions());
      this.layerContainer.addLayer(t);
      return t;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var map = this.context.map;

      map.on("zoomend", this._onZoomEnd, this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var map = this.context.map;

      map.off("zoomend", this._onZoomEnd, this);
    }
  }]);

  return LayerGroupCollision;
}(_reactLeaflet.MapLayer);

LayerGroupCollision.childContextTypes = {
  layerContainer: _react.PropTypes.shape({
    addLayer: _react.PropTypes.func.isRequired,
    removeLayer: _react.PropTypes.func.isRequired
  })
};
exports.default = LayerGroupCollision;