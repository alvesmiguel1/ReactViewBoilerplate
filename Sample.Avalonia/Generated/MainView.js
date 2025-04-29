(window["webpackChunkViews"] = window["webpackChunkViews"] || []).push([["MainView"],{

/***/ "./MainView/MainView.tsx":
/*!*******************************!*\
  !*** ./MainView/MainView.tsx ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    class MainView extends React.Component {
        constructor(props) {
            super(props);
            this.onBtnClick = () => {
                this.props.onBtnClick();
            };
        }
        render() {
            return (React.createElement("div", { className: "wrapper" },
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("span", null, "This is a checkbox."),
                React.createElement("br", null),
                React.createElement("span", null, "Try to check with the focus on the input of another (opened) window."),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("input", { type: "checkbox" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("span", null, "This is an input."),
                React.createElement("br", null),
                React.createElement("span", null, "Try to write some things here."),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("input", { type: "text" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("button", { onClick: this.onBtnClick }, "Click here to open another Window equal to this one."),
                React.createElement("br", null),
                React.createElement("br", null)));
        }
    }
    exports["default"] = MainView;
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
/******/ var __webpack_exports__ = (__webpack_exec__("./MainView/MainView.tsx"));
/******/ (window.Views = window.Views || {}).MainView = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdGVkL01haW5WaWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsaUdBQU8sQ0FBQyxtQkFBUyxFQUFFLE9BQVMsRUFBRSx5Q0FBTyxDQUFDLG1DQUFFO0FBQ3hDO0FBQ0EsSUFBSSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxzQkFBc0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7QUFDQTtBQUNBLGdEQUFnRCwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtCQUFlO0FBQ25CLENBQUM7QUFBQSxrR0FBQzs7Ozs7Ozs7Ozs7O0FDcENGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVmlld3MvLi9NYWluVmlldy9NYWluVmlldy50c3giLCJ3ZWJwYWNrOi8vVmlld3MvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJyZWFjdFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIFJlYWN0KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMub25CdG5DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQnRuQ2xpY2soKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndyYXBwZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJUaGlzIGlzIGEgY2hlY2tib3guXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIlRyeSB0byBjaGVjayB3aXRoIHRoZSBmb2N1cyBvbiB0aGUgaW5wdXQgb2YgYW5vdGhlciAob3BlbmVkKSB3aW5kb3cuXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJUaGlzIGlzIGFuIGlucHV0LlwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJUcnkgdG8gd3JpdGUgc29tZSB0aGluZ3MgaGVyZS5cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiB0aGlzLm9uQnRuQ2xpY2sgfSwgXCJDbGljayBoZXJlIHRvIG9wZW4gYW5vdGhlciBXaW5kb3cgZXF1YWwgdG8gdGhpcyBvbmUuXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnRzLmRlZmF1bHQgPSBNYWluVmlldztcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=