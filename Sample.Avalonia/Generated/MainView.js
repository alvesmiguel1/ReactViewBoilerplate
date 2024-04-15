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
            this.onFlyoutClick = () => {
                this.props.onFlyoutClick();
            };
        }
        render() {
            return (React.createElement("div", { className: "wrapper" },
                React.createElement("button", { onClick: this.onBtnClick }, "Create Popup with Input"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("button", { onClick: this.onFlyoutClick }, "Create Flyout with Input")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdGVkL01haW5WaWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsaUdBQU8sQ0FBQyxtQkFBUyxFQUFFLE9BQVMsRUFBRSx5Q0FBTyxDQUFDLG1DQUFFO0FBQ3hDO0FBQ0EsSUFBSSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxzQkFBc0I7QUFDdkUsZ0RBQWdELDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsZ0RBQWdELDZCQUE2QjtBQUM3RTtBQUNBO0FBQ0EsSUFBSSxrQkFBZTtBQUNuQixDQUFDO0FBQUEsa0dBQUM7Ozs7Ozs7Ozs7OztBQ3RCRiIsInNvdXJjZXMiOlsid2VicGFjazovL1ZpZXdzLy4vTWFpblZpZXcvTWFpblZpZXcudHN4Iiwid2VicGFjazovL1ZpZXdzL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwicmVhY3RcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBSZWFjdCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBjbGFzcyBNYWluVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLm9uQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkJ0bkNsaWNrKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5vbkZseW91dENsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25GbHlvdXRDbGljaygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid3JhcHBlclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IHRoaXMub25CdG5DbGljayB9LCBcIkNyZWF0ZSBQb3B1cCB3aXRoIElucHV0XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IHRoaXMub25GbHlvdXRDbGljayB9LCBcIkNyZWF0ZSBGbHlvdXQgd2l0aCBJbnB1dFwiKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IE1haW5WaWV3O1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==