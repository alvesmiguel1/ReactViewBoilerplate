(window["webpackChunkViews"] = window["webpackChunkViews"] || []).push([["Popup"],{

/***/ "./Popup/Popup.tsx":
/*!*************************!*\
  !*** ./Popup/Popup.tsx ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    class PopupView extends React.Component {
        constructor(props) {
            super(props);
            this.onBtnClick = () => {
                this.props.onBtnClick();
            };
            this.state = {
                popupData: "hi",
            };
        }
        async refreshPopup() {
            const newPopupData = await this.props.getPopupData();
            this.setState({ popupData: newPopupData });
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("span", null, this.state.popupData),
                React.createElement("br", null),
                React.createElement("input", { type: "text" }),
                React.createElement("br", null),
                React.createElement("button", { onClick: this.onBtnClick }, "Close Popup")));
        }
    }
    exports["default"] = PopupView;
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
/******/ var __webpack_exports__ = (__webpack_exec__("./Popup/Popup.tsx"));
/******/ (window.Views = window.Views || {}).Popup = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdGVkL1BvcHVwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsaUdBQU8sQ0FBQyxtQkFBUyxFQUFFLE9BQVMsRUFBRSx5Q0FBTyxDQUFDLG1DQUFFO0FBQ3hDO0FBQ0EsSUFBSSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7QUFDQSxnREFBZ0QsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFJLGtCQUFlO0FBQ25CLENBQUM7QUFBQSxrR0FBQzs7Ozs7Ozs7Ozs7O0FDM0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVmlld3MvLi9Qb3B1cC9Qb3B1cC50c3giLCJ3ZWJwYWNrOi8vVmlld3MvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJyZWFjdFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIFJlYWN0KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGNsYXNzIFBvcHVwVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLm9uQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkJ0bkNsaWNrKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBwb3B1cERhdGE6IFwiaGlcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgcmVmcmVzaFBvcHVwKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UG9wdXBEYXRhID0gYXdhaXQgdGhpcy5wcm9wcy5nZXRQb3B1cERhdGEoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb3B1cERhdGE6IG5ld1BvcHVwRGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCB0aGlzLnN0YXRlLnBvcHVwRGF0YSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogdGhpcy5vbkJ0bkNsaWNrIH0sIFwiQ2xvc2UgUG9wdXBcIikpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnRzLmRlZmF1bHQgPSBQb3B1cFZpZXc7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9