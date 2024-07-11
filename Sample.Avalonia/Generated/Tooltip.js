(window["webpackChunkViews"] = window["webpackChunkViews"] || []).push([["Tooltip"],{

/***/ "./Tooltip/Tooltip.tsx":
/*!*****************************!*\
  !*** ./Tooltip/Tooltip.tsx ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    class TooltipView extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                tooltipData: "this is a tooltip lol",
            };
        }
        async refreshTooltip() {
            const newTooltipData = await this.props.getTooltip();
            this.setState({ tooltipData: newTooltipData });
        }
        render() {
            const tooltipStyle = {
                padding: 0,
                backgroundColor: "#2C2F32",
                color: 'white',
                fontSize: '16px'
            };
            return (React.createElement("div", { style: tooltipStyle },
                React.createElement("span", null, this.state.tooltipData)));
        }
    }
    exports["default"] = TooltipView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./Tooltip/Tooltip.tsx"));
/******/ (window.Views = window.Views || {}).Tooltip = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdGVkL1Rvb2x0aXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxpR0FBTyxDQUFDLG1CQUFTLEVBQUUsT0FBUyxFQUFFLHlDQUFPLENBQUMsbUNBQUU7QUFDeEM7QUFDQSxJQUFJLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLElBQUksa0JBQWU7QUFDbkIsQ0FBQztBQUFBLGtHQUFDOzs7Ozs7Ozs7Ozs7QUMxQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9WaWV3cy8uL1Rvb2x0aXAvVG9vbHRpcC50c3giLCJ3ZWJwYWNrOi8vVmlld3MvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJyZWFjdFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIFJlYWN0KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGNsYXNzIFRvb2x0aXBWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcERhdGE6IFwidGhpcyBpcyBhIHRvb2x0aXAgbG9sXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHJlZnJlc2hUb29sdGlwKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3VG9vbHRpcERhdGEgPSBhd2FpdCB0aGlzLnByb3BzLmdldFRvb2x0aXAoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b29sdGlwRGF0YTogbmV3VG9vbHRpcERhdGEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgdG9vbHRpcFN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyQzJGMzJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHRvb2x0aXBTdHlsZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIHRoaXMuc3RhdGUudG9vbHRpcERhdGEpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gVG9vbHRpcFZpZXc7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9