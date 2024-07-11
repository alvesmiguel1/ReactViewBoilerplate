(window["webpackChunkViews"] = window["webpackChunkViews"] || []).push([["ViewPlugin"],{

/***/ "./ViewPlugin/ViewPlugin.ts":
/*!**********************************!*\
  !*** ./ViewPlugin/ViewPlugin.ts ***!
  \**********************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    console.log("Plugin loaded");
    class ViewPlugin {
        constructor(nativeObject) {
            this.nativeObject = nativeObject;
        }
        notifyViewLoaded(viewName) {
            this.nativeObject.notifyViewLoaded(viewName);
        }
        showTooltip(x, y) {
            this.nativeObject.showTooltip(x, y);
        }
        hideTooltip() {
            this.nativeObject.hideTooltip();
        }
    }
    exports["default"] = ViewPlugin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./ViewPlugin/ViewPlugin.ts"));
/******/ (window.Views = window.Views || {}).ViewPlugin = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdGVkL1ZpZXdQbHVnaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxpR0FBTyxDQUFDLG1CQUFTLEVBQUUsT0FBUyxDQUFDLG1DQUFFO0FBQy9CO0FBQ0EsSUFBSSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrQkFBZTtBQUNuQixDQUFDO0FBQUEsa0dBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9WaWV3cy8uL1ZpZXdQbHVnaW4vVmlld1BsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiUGx1Z2luIGxvYWRlZFwiKTtcbiAgICBjbGFzcyBWaWV3UGx1Z2luIHtcbiAgICAgICAgY29uc3RydWN0b3IobmF0aXZlT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZU9iamVjdCA9IG5hdGl2ZU9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBub3RpZnlWaWV3TG9hZGVkKHZpZXdOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZU9iamVjdC5ub3RpZnlWaWV3TG9hZGVkKHZpZXdOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBzaG93VG9vbHRpcCh4LCB5KSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZU9iamVjdC5zaG93VG9vbHRpcCh4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBoaWRlVG9vbHRpcCgpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlT2JqZWN0LmhpZGVUb29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gVmlld1BsdWdpbjtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9