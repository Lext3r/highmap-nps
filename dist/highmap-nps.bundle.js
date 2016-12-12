/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _highmapsNps = __webpack_require__(1);\n\nvar _highmapsNps2 = _interopRequireDefault(_highmapsNps);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.Reportal = window.Reportal || {}; /**\n                                          * Created by IvanP on 07.09.2016.\n                                          */\n\n_highmapsNps2.default.mixin(window.Reportal, {\n  HighMapsNPS: _highmapsNps2.default\n});\nexports.default = Reportal;\nmodule.exports = exports['default'];//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbIndpbmRvdyIsIlJlcG9ydGFsIiwibWl4aW4iLCJIaWdoTWFwc05QUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUE7Ozs7OztBQUNBQSxPQUFPQyxRQUFQLEdBQWtCRCxPQUFPQyxRQUFQLElBQW1CLEVBQXJDLEMsQ0FMQTs7OztBQU1BLHNCQUFZQyxLQUFaLENBQWtCRixPQUFPQyxRQUF6QixFQUFrQztBQUNoQ0U7QUFEZ0MsQ0FBbEM7a0JBR2VGLFEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAwNy4wOS4yMDE2LlxuICovXG5cbmltcG9ydCBIaWdoTWFwc05QUyBmcm9tIFwiLi9oaWdobWFwcy1ucHNcIjtcbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fVxuSGlnaE1hcHNOUFMubWl4aW4od2luZG93LlJlcG9ydGFsLHtcbiAgSGlnaE1hcHNOUFNcbn0pO1xuZXhwb3J0IGRlZmF1bHQgUmVwb3J0YWxcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HighMapsNPS = function () {\n  /**\n   * @param {HTMLTableElement} table - table element where the data is storage\n   * @param {Array} columnNames - array of column names of data table\n   * @param {String} containerID - container for rendering map\n   * @param {Array} dataClasses - set of colored groups for map\n   * @param {String} map - key for Higchart.maps\n   * @param {Object} options - options for HighMap chart\n   *\n   */\n  function HighMapsNPS() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        table = _ref.table,\n        _ref$columnNames = _ref.columnNames,\n        columnNames = _ref$columnNames === undefined ? [] : _ref$columnNames,\n        containerID = _ref.containerID,\n        _ref$dataClasses = _ref.dataClasses,\n        dataClasses = _ref$dataClasses === undefined ? [{\n      from: 80,\n      to: 100,\n      color: '#8bc34a',\n      name: 'Promoter'\n    }, {\n      from: 60,\n      to: 80,\n      color: '#ffc107',\n      name: 'Passive'\n    }, {\n      from: 0,\n      to: 60,\n      color: '#f44336',\n      name: 'Detractor'\n    }] : _ref$dataClasses,\n        map = _ref.map,\n        options = _ref.options;\n\n    _classCallCheck(this, HighMapsNPS);\n\n    if ((typeof Highcharts === 'undefined' ? 'undefined' : _typeof(Highcharts)) == undefined) {\n      throw new Error('Highcharts must be declared. Probably they are missing');\n    }\n    if (_typeof(Highcharts.maps) == undefined) {\n      throw new Error('HighMaps must be loaded. Probably they are missing');\n    }\n    if (!(table instanceof HTMLTableElement)) {\n      throw new Error('Table is missing');\n    }\n    var data = this.constructor.getData(table, columnNames);\n    this.constructor.createMap(options, containerID, data, map, dataClasses, this.constructor.getHeaders(table, columnNames));\n  }\n\n  /**\n  * Strips data from `table`\n  * @param {HTMLTableElement} table - table element\n  * @param {Array} columnNames - names of columns in resulting object\n  * @returns {Array} returns set of objects\n  */\n\n\n  _createClass(HighMapsNPS, null, [{\n    key: 'getData',\n    value: function getData(table, columnNames) {\n      return [].slice.call(table.querySelectorAll('tbody>tr')).reduce(function (init, row, index) {\n        init[index] = {};\n        [].slice.call(row.children).forEach(function (td, i) {\n          var val = td.textContent.trim();\n          val = val === \"DISTRICT OF COLUMBIA\" ? \"District of Columbia\" : val.toLowerCase().split(\" \").map(function (x) {\n            return x.charAt(0).toUpperCase() + x.slice(1);\n          }).join(\" \");\n          if (columnNames[i]) init[index][columnNames[i]] = val.length != 0 ? isNaN(parseFloat(val)) ? val : parseFloat(val) : null;\n        });\n        return init;\n      }, []);\n    }\n\n    /**\n    * Strips header from `table`\n    * @param {HTMLTableElement} table - table element\n    * @param {Array} columnNames - names of columns in resulting object\n    * @returns {Object} returns object where <key> : <column name> info stored\n    */\n\n  }, {\n    key: 'getHeaders',\n    value: function getHeaders(table, columnNames) {\n      var o = {};\n      [].slice.call(table.querySelectorAll('thead>tr>td')).forEach(function (cell, index) {\n        var val = cell.textContent.trim();\n        if (columnNames[index]) o[columnNames[index]] = val.length != 0 ? val : null;\n      });\n      return o;\n    }\n    /**\n     * Copies props from a source object to a target object.\n     *\n     * Note, this method uses a simple `for...in` strategy for enumerating\n     * properties.  To ensure only `ownProperties` are copied from source\n     * to target and that accessor implementations are copied, use `extend`.\n     * @param {Object} target Target object to copy properties to.\n     * @param {Object} source Source object to copy properties from.\n     * @return {Object} Target object that was passed as first argument.\n     */\n\n  }, {\n    key: 'mixin',\n    value: function mixin(target, source) {\n      for (var i in source) {\n        target[i] = source[i];\n      }\n      return target;\n    }\n    /**\n    * Makes output for mapChart tooltip point format\n    * @params {Array} headers - data to be added to tooltip\n    * @returns {String}\n    */\n\n  }, {\n    key: 'composeOutput',\n    value: function composeOutput(headers) {\n      var a = ['<b>{point.name}</b>: {point.value}'];\n      for (var key in headers) {\n        if (key !== \"name\" && key !== \"value\") {\n          a.push('<b>' + headers[key] + '</b>: {point.' + key + '}');\n        }\n      }\n      return a.join('<br>');\n    }\n    /**\n    * Creates highmap\n    * @param {Object} options - options for HighMap chart\n    * @param {String} containerID - container for rendering map\n    * @param {Object} data - input data for highmap\n    * @param {String} map - key for Higchart.maps\n    * @param {Array} dataClasses - set of colored groups for map\n    * @param {Array} columnHeaders an array where <key>: column name and <value>:column header\n    */\n\n  }, {\n    key: 'createMap',\n    value: function createMap(options, containerID, data, map, dataClasses, columnHeaders) {\n      var config = {\n        chart: {\n          borderWidth: 1\n        },\n\n        title: {\n          text: ''\n        },\n\n        legend: {\n          layout: 'horizontal',\n          borderWidth: 0,\n          backgroundColor: 'rgba(255,255,255,0.85)',\n          floating: false,\n          verticalAlign: 'bottom',\n          y: 10\n        },\n\n        mapNavigation: {\n          enabled: true\n        },\n\n        colorAxis: {\n          dataClasses: dataClasses\n        },\n\n        series: [{\n          data: data,\n          mapData: Highcharts.maps[map],\n          joinBy: ['name', 'name'],\n          allAreas: false,\n          dataLabels: {\n            enabled: true,\n            color: '#FFFFFF',\n            format: '{point.name}'\n          },\n          name: '<b>' + columnHeaders.value + '</b>',\n          tooltip: {\n            pointFormat: HighMapsNPS.composeOutput(columnHeaders)\n          }\n        }]\n      };\n      config = HighMapsNPS.mixin(config, options);\n      Highcharts.mapChart(containerID, config);\n    }\n  }]);\n\n  return HighMapsNPS;\n}();\n\nexports.default = HighMapsNPS;\nmodule.exports = exports['default'];//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGlnaG1hcHMtbnBzLmpzP2E4ZmQiXSwibmFtZXMiOlsiSGlnaE1hcHNOUFMiLCJ0YWJsZSIsImNvbHVtbk5hbWVzIiwiY29udGFpbmVySUQiLCJkYXRhQ2xhc3NlcyIsImZyb20iLCJ0byIsImNvbG9yIiwibmFtZSIsIm1hcCIsIm9wdGlvbnMiLCJIaWdoY2hhcnRzIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJtYXBzIiwiSFRNTFRhYmxlRWxlbWVudCIsImRhdGEiLCJjb25zdHJ1Y3RvciIsImdldERhdGEiLCJjcmVhdGVNYXAiLCJnZXRIZWFkZXJzIiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsInJlZHVjZSIsImluaXQiLCJyb3ciLCJpbmRleCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsInRkIiwiaSIsInZhbCIsInRleHRDb250ZW50IiwidHJpbSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJ4IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJqb2luIiwibGVuZ3RoIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwibyIsImNlbGwiLCJ0YXJnZXQiLCJzb3VyY2UiLCJoZWFkZXJzIiwiYSIsImtleSIsInB1c2giLCJjb2x1bW5IZWFkZXJzIiwiY29uZmlnIiwiY2hhcnQiLCJib3JkZXJXaWR0aCIsInRpdGxlIiwidGV4dCIsImxlZ2VuZCIsImxheW91dCIsImJhY2tncm91bmRDb2xvciIsImZsb2F0aW5nIiwidmVydGljYWxBbGlnbiIsInkiLCJtYXBOYXZpZ2F0aW9uIiwiZW5hYmxlZCIsImNvbG9yQXhpcyIsInNlcmllcyIsIm1hcERhdGEiLCJqb2luQnkiLCJhbGxBcmVhcyIsImRhdGFMYWJlbHMiLCJmb3JtYXQiLCJ2YWx1ZSIsInRvb2x0aXAiLCJwb2ludEZvcm1hdCIsImNvbXBvc2VPdXRwdXQiLCJtaXhpbiIsIm1hcENoYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsVztBQUNKOzs7Ozs7Ozs7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Z0JBQVE7QUFDSkMsa0JBQVEsWUFESjtBQUVKSix1QkFBYSxDQUZUO0FBR0pLLDJCQUFpQix3QkFIYjtBQUlKQyxvQkFBVSxLQUpOO0FBS0pDLHlCQUFlLFFBTFg7QUFNSkMsYUFBRztBQU5DLFNBVEQ7O0FBa0JQQyx1QkFBZTtBQUNYQyxtQkFBUztBQURFLFNBbEJSOztBQXNCUEMsbUJBQVc7QUFDVDlEO0FBRFMsU0F0Qko7O0FBMEJQK0QsZ0JBQVEsQ0FDUjtBQUNJbkQsb0JBREo7QUFFSW9ELG1CQUFTekQsV0FBV0csSUFBWCxDQUFnQkwsR0FBaEIsQ0FGYjtBQUdJNEQsa0JBQVEsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUhaO0FBSUlDLG9CQUFVLEtBSmQ7QUFLSUMsc0JBQVk7QUFDUk4scUJBQVMsSUFERDtBQUVSMUQsbUJBQU8sU0FGQztBQUdSaUUsb0JBQVE7QUFIQSxXQUxoQjtBQVVJaEUsd0JBQVk0QyxjQUFjcUIsS0FBMUIsU0FWSjtBQVdJQyxtQkFBUztBQUNMQyx5QkFBYTNFLFlBQVk0RSxhQUFaLENBQTBCeEIsYUFBMUI7QUFEUjtBQVhiLFNBRFE7QUExQkQsT0FBYjtBQTJDQUMsZUFBU3JELFlBQVk2RSxLQUFaLENBQWtCeEIsTUFBbEIsRUFBeUIzQyxPQUF6QixDQUFUO0FBQ0FDLGlCQUFXbUUsUUFBWCxDQUFvQjNFLFdBQXBCLEVBQWlDa0QsTUFBakM7QUFDRDs7Ozs7O2tCQUdVckQsVyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSGlnaE1hcHNOUFN7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxUYWJsZUVsZW1lbnR9IHRhYmxlIC0gdGFibGUgZWxlbWVudCB3aGVyZSB0aGUgZGF0YSBpcyBzdG9yYWdlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNvbHVtbk5hbWVzIC0gYXJyYXkgb2YgY29sdW1uIG5hbWVzIG9mIGRhdGEgdGFibGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbnRhaW5lcklEIC0gY29udGFpbmVyIGZvciByZW5kZXJpbmcgbWFwXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGFDbGFzc2VzIC0gc2V0IG9mIGNvbG9yZWQgZ3JvdXBzIGZvciBtYXBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hcCAtIGtleSBmb3IgSGlnY2hhcnQubWFwc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgZm9yIEhpZ2hNYXAgY2hhcnRcbiAgICpcbiAgICovXG4gICAgY29uc3RydWN0b3Ioe3RhYmxlLGNvbHVtbk5hbWVzPVtdLGNvbnRhaW5lcklELCBkYXRhQ2xhc3NlcyA9IFt7XG4gICAgICAgICAgICAgICAgICBmcm9tOiA4MCxcbiAgICAgICAgICAgICAgICAgIHRvOiAxMDAsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyM4YmMzNGEnLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ1Byb21vdGVyJ1xuICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgIGZyb206IDYwLFxuICAgICAgICAgICAgICAgICAgdG86IDgwLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZjMTA3JyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdQYXNzaXZlJ1xuICAgICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICAgICAgICB0bzogNjAsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyNmNDQzMzYnLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ0RldHJhY3RvcidcbiAgICAgICAgICAgICAgfV0sIG1hcCxvcHRpb25zfT17fSl7XG4gICAgICBpZih0eXBlb2YgSGlnaGNoYXJ0cyA9PSB1bmRlZmluZWQpe3Rocm93IG5ldyBFcnJvcignSGlnaGNoYXJ0cyBtdXN0IGJlIGRlY2xhcmVkLiBQcm9iYWJseSB0aGV5IGFyZSBtaXNzaW5nJyl9XG4gICAgICBpZih0eXBlb2YgSGlnaGNoYXJ0cy5tYXBzID09IHVuZGVmaW5lZCl7dGhyb3cgbmV3IEVycm9yKCdIaWdoTWFwcyBtdXN0IGJlIGxvYWRlZC4gUHJvYmFibHkgdGhleSBhcmUgbWlzc2luZycpfVxuICAgICAgaWYoISh0YWJsZSBpbnN0YW5jZW9mIEhUTUxUYWJsZUVsZW1lbnQpKSB7dGhyb3cgbmV3IEVycm9yKCdUYWJsZSBpcyBtaXNzaW5nJyl9XG4gICAgICBsZXQgZGF0YSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGF0YSh0YWJsZSxjb2x1bW5OYW1lcyk7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLmNyZWF0ZU1hcChvcHRpb25zLCBjb250YWluZXJJRCwgZGF0YSwgbWFwLCBkYXRhQ2xhc3Nlcyx0aGlzLmNvbnN0cnVjdG9yLmdldEhlYWRlcnModGFibGUsY29sdW1uTmFtZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFN0cmlwcyBkYXRhIGZyb20gYHRhYmxlYFxuICAgICogQHBhcmFtIHtIVE1MVGFibGVFbGVtZW50fSB0YWJsZSAtIHRhYmxlIGVsZW1lbnRcbiAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbHVtbk5hbWVzIC0gbmFtZXMgb2YgY29sdW1ucyBpbiByZXN1bHRpbmcgb2JqZWN0XG4gICAgKiBAcmV0dXJucyB7QXJyYXl9IHJldHVybnMgc2V0IG9mIG9iamVjdHNcbiAgICAqL1xuICAgIHN0YXRpYyBnZXREYXRhKHRhYmxlLGNvbHVtbk5hbWVzKXtcbiAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5PnRyJykpLnJlZHVjZSgoaW5pdCxyb3csaW5kZXgpPT57XG4gICAgICAgIGluaXRbaW5kZXhdPSB7fTtcbiAgICAgICAgW10uc2xpY2UuY2FsbChyb3cuY2hpbGRyZW4pLmZvckVhY2goKHRkLGkpPT57XG4gICAgICAgICAgbGV0IHZhbCA9IHRkLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICB2YWwgPSB2YWwgPT09IFwiRElTVFJJQ1QgT0YgQ09MVU1CSUFcIiA/IFwiRGlzdHJpY3Qgb2YgQ29sdW1iaWFcIiA6IHZhbC50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5tYXAoeCA9PiB4LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgeC5zbGljZSgxKSkuam9pbihcIiBcIik7XG4gICAgICAgICAgaWYoY29sdW1uTmFtZXNbaV0paW5pdFtpbmRleF1bY29sdW1uTmFtZXNbaV1dID0gdmFsLmxlbmd0aCE9MD9pc05hTihwYXJzZUZsb2F0KHZhbCkpP3ZhbDpwYXJzZUZsb2F0KHZhbCk6bnVsbDtcbiAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluaXQ7XG4gICAgICB9LFtdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFN0cmlwcyBoZWFkZXIgZnJvbSBgdGFibGVgXG4gICAgKiBAcGFyYW0ge0hUTUxUYWJsZUVsZW1lbnR9IHRhYmxlIC0gdGFibGUgZWxlbWVudFxuICAgICogQHBhcmFtIHtBcnJheX0gY29sdW1uTmFtZXMgLSBuYW1lcyBvZiBjb2x1bW5zIGluIHJlc3VsdGluZyBvYmplY3RcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJldHVybnMgb2JqZWN0IHdoZXJlIDxrZXk+IDogPGNvbHVtbiBuYW1lPiBpbmZvIHN0b3JlZFxuICAgICovXG4gICAgc3RhdGljIGdldEhlYWRlcnModGFibGUsY29sdW1uTmFtZXMpe1xuICAgICAgbGV0IG8gPSB7fTtcbiAgICAgIFtdLnNsaWNlLmNhbGwodGFibGUucXVlcnlTZWxlY3RvckFsbCgndGhlYWQ+dHI+dGQnKSkuZm9yRWFjaCgoY2VsbCxpbmRleCk9PntcbiAgICAgICAgICBsZXQgdmFsID0gY2VsbC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgaWYoY29sdW1uTmFtZXNbaW5kZXhdKVxuICAgICAgICAgICAgb1tjb2x1bW5OYW1lc1tpbmRleF1dID0gdmFsLmxlbmd0aCE9MD92YWw6bnVsbDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICAvKipcbiAgICogQ29waWVzIHByb3BzIGZyb20gYSBzb3VyY2Ugb2JqZWN0IHRvIGEgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogTm90ZSwgdGhpcyBtZXRob2QgdXNlcyBhIHNpbXBsZSBgZm9yLi4uaW5gIHN0cmF0ZWd5IGZvciBlbnVtZXJhdGluZ1xuICAgKiBwcm9wZXJ0aWVzLiAgVG8gZW5zdXJlIG9ubHkgYG93blByb3BlcnRpZXNgIGFyZSBjb3BpZWQgZnJvbSBzb3VyY2VcbiAgICogdG8gdGFyZ2V0IGFuZCB0aGF0IGFjY2Vzc29yIGltcGxlbWVudGF0aW9ucyBhcmUgY29waWVkLCB1c2UgYGV4dGVuZGAuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGFyZ2V0IG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgU291cmNlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudC5cbiAgICovXG4gIHN0YXRpYyBtaXhpbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAobGV0IGkgaW4gc291cmNlKSB7XG4gICAgICB0YXJnZXRbaV0gPSBzb3VyY2VbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgICAvKipcbiAgICAqIE1ha2VzIG91dHB1dCBmb3IgbWFwQ2hhcnQgdG9vbHRpcCBwb2ludCBmb3JtYXRcbiAgICAqIEBwYXJhbXMge0FycmF5fSBoZWFkZXJzIC0gZGF0YSB0byBiZSBhZGRlZCB0byB0b29sdGlwXG4gICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICovXG4gICAgc3RhdGljIGNvbXBvc2VPdXRwdXQoaGVhZGVycyl7XG4gICAgICBsZXQgYSA9IFsnPGI+e3BvaW50Lm5hbWV9PC9iPjoge3BvaW50LnZhbHVlfSddO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaGVhZGVycyl7XG4gICAgICAgIGlmIChrZXkgIT09IFwibmFtZVwiICYmIGtleSAhPT0gXCJ2YWx1ZVwiKXtcbiAgICAgICAgICBhLnB1c2goYDxiPiR7aGVhZGVyc1trZXldfTwvYj46IHtwb2ludC4ke2tleX19YCk7XG4gICAgICAgIH1cbiAgICAgICB9XG4gICAgICByZXR1cm4gYS5qb2luKCc8YnI+Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBoaWdobWFwXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgZm9yIEhpZ2hNYXAgY2hhcnRcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb250YWluZXJJRCAtIGNvbnRhaW5lciBmb3IgcmVuZGVyaW5nIG1hcFxuICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBpbnB1dCBkYXRhIGZvciBoaWdobWFwXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gbWFwIC0ga2V5IGZvciBIaWdjaGFydC5tYXBzXG4gICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhQ2xhc3NlcyAtIHNldCBvZiBjb2xvcmVkIGdyb3VwcyBmb3IgbWFwXG4gICAgKiBAcGFyYW0ge0FycmF5fSBjb2x1bW5IZWFkZXJzIGFuIGFycmF5IHdoZXJlIDxrZXk+OiBjb2x1bW4gbmFtZSBhbmQgPHZhbHVlPjpjb2x1bW4gaGVhZGVyXG4gICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlTWFwKG9wdGlvbnMsIGNvbnRhaW5lcklELCBkYXRhLCBtYXAsIGRhdGFDbGFzc2VzLGNvbHVtbkhlYWRlcnMpe1xuICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGxheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC44NSknLFxuICAgICAgICAgICAgICAgIGZsb2F0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICB5OiAxMFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbWFwTmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNvbG9yQXhpczoge1xuICAgICAgICAgICAgICBkYXRhQ2xhc3Nlc1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBtYXBEYXRhOiBIaWdoY2hhcnRzLm1hcHNbbWFwXSxcbiAgICAgICAgICAgICAgICBqb2luQnk6IFsnbmFtZScsICduYW1lJ10sXG4gICAgICAgICAgICAgICAgYWxsQXJlYXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAne3BvaW50Lm5hbWV9J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogYDxiPiR7Y29sdW1uSGVhZGVycy52YWx1ZX08L2I+YCxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50Rm9ybWF0OiBIaWdoTWFwc05QUy5jb21wb3NlT3V0cHV0KGNvbHVtbkhlYWRlcnMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICAgIGNvbmZpZyA9IEhpZ2hNYXBzTlBTLm1peGluKGNvbmZpZyxvcHRpb25zKTtcbiAgICAgIEhpZ2hjaGFydHMubWFwQ2hhcnQoY29udGFpbmVySUQsIGNvbmZpZyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaWdoTWFwc05QU1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hpZ2htYXBzLW5wcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);