(window["webpackChunkViews"] = window["webpackChunkViews"] || []).push([["MainView"],{

/***/ "./MainView/MainView.scss":
/*!********************************!*\
  !*** ./MainView/MainView.scss ***!
  \********************************/
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports =  {"exportedVariable":"\"Some SASS Defined value\""};

/***/ }),

/***/ "./MainView/MainView.tsx":
/*!*******************************!*\
  !*** ./MainView/MainView.tsx ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! ViewFrame */ "ViewFrame"), __webpack_require__(/*! ./../ViewPlugin/ViewPlugin */ "./ViewPlugin/ViewPlugin.ts"), __webpack_require__(/*! ./Tasks.png */ "./MainView/Tasks.png"), __webpack_require__(/*! ./MainView.scss */ "./MainView/MainView.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, React, ViewFrame_1, ViewPlugin_1, BackgroundImage) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.BackgroundKind = void 0;
    var BackgroundKind;
    (function (BackgroundKind) {
        BackgroundKind[BackgroundKind["None"] = 0] = "None";
        BackgroundKind[BackgroundKind["Color"] = 1] = "Color";
        BackgroundKind[BackgroundKind["Image"] = 2] = "Image";
    })(BackgroundKind || (exports.BackgroundKind = BackgroundKind = {}));
    var TaskListShowStatus;
    (function (TaskListShowStatus) {
        TaskListShowStatus[TaskListShowStatus["Show"] = 0] = "Show";
        TaskListShowStatus[TaskListShowStatus["ShowWrapped"] = 1] = "ShowWrapped";
        TaskListShowStatus[TaskListShowStatus["Hide"] = 2] = "Hide";
    })(TaskListShowStatus || (TaskListShowStatus = {}));
    class MainView extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.inputRef = React.createRef();
            this.toggleShowTasks = () => {
                const next = (this.state.taskListShowStatus + 1) % 3;
                if (next === TaskListShowStatus.Show) {
                    this.props.taskListShown();
                }
                this.setState({ taskListShowStatus: next });
            };
            this.onAddTaskButtonClicked = () => {
                const input = this.inputRef.current;
                this.props.addTaskButtonClicked({ text: input.value });
                input.value = "";
            };
            this.handleMouseOver = (event) => {
                this.viewplugin.showTooltip(event.clientX, event.clientY);
            };
            this.handleMouseLeave = (event) => {
                this.viewplugin.hideTooltip();
            };
            this.initialize();
            this.viewplugin = context.getPluginInstance(ViewPlugin_1.default);
        }
        async initialize() {
            this.state = {
                tasksCount: 0,
                taskListShowStatus: TaskListShowStatus.Show
            };
            this.refresh();
        }
        refresh() {
            (async () => {
                const tasksCount = await this.props.getTasksCount();
                this.setState({ tasksCount });
            })();
        }
        componentDidMount() {
            // test focus
            if (this.inputRef.current) {
                this.inputRef.current.focus();
            }
            this.viewplugin.notifyViewLoaded("Main View");
            if (this.props.backgroundKind === BackgroundKind.Image) {
                // example on how to use an image resource in codee
                document.body.style.backgroundImage = `url(${BackgroundImage})`;
            }
        }
        renderViewFrame() {
            // example on how to render a child view
            return React.createElement(ViewFrame_1.ViewFrame, { key: "list_frame", name: "ListView", className: "" });
        }
        renderListView() {
            // this is showing the capability of child views from moving around in DOM without losing state
            // state will only losed when unmounted
            switch (this.state.taskListShowStatus) {
                case TaskListShowStatus.Show:
                    return this.renderViewFrame();
                case TaskListShowStatus.ShowWrapped:
                    return React.createElement("div", { className: "blocked-list" }, this.renderViewFrame());
                default:
                    return null;
            }
        }
        render() {
            return (React.createElement("div", { className: "wrapper" },
                React.createElement("div", { className: "title" }, this.props.titleMessage),
                React.createElement("input", { className: "task-input", ref: this.inputRef, onChange: () => this.props.inputChanged() }),
                React.createElement("button", { className: "task-add", onClick: this.onAddTaskButtonClicked, onMouseOver: this.handleMouseOver, onMouseLeave: this.handleMouseLeave }, "Add Task"),
                React.createElement("button", { className: "tasks-toggle-show", onClick: this.toggleShowTasks }, "Show/Block/Hide Tasks"),
                this.renderListView(),
                React.createElement("div", null,
                    this.state.tasksCount,
                    " task(s)")));
        }
    }
    exports["default"] = MainView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

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


/***/ }),

/***/ "./MainView/Tasks.png":
/*!****************************!*\
  !*** ./MainView/Tasks.png ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = "/Sample.Avalonia/MainView/Tasks.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "ViewFrame":
/*!****************************!*\
  !*** external "ViewFrame" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = window["ViewFrame"];

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./MainView/MainView.tsx"));
/******/ (window.Views = window.Views || {}).MainView = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdGVkL01haW5WaWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxtQkFBbUI7Ozs7Ozs7Ozs7QUNEbkIsaUdBQU8sQ0FBQyxtQkFBUyxFQUFFLE9BQVMsRUFBRSx5Q0FBTyxFQUFFLGlEQUFXLEVBQUUsbUZBQTRCLEVBQUUsOERBQWEsRUFBRSxzRUFBaUIsQ0FBQyxtQ0FBRTtBQUNySDtBQUNBLElBQUksOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQ2pFLElBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHFCQUFxQixzQkFBc0Isc0JBQXNCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdEQUFnRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMEJBQTBCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxtQkFBbUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxnQkFBZ0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usb0RBQW9EO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsMkJBQTJCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsc0JBQXNCO0FBQ3ZFLDZDQUE2QyxvQkFBb0I7QUFDakUsK0NBQStDLHdGQUF3RjtBQUN2SSxnREFBZ0QscUlBQXFJO0FBQ3JMLGdEQUFnRCwrREFBK0Q7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrQkFBZTtBQUNuQixDQUFDO0FBQUEsa0dBQUM7Ozs7Ozs7Ozs7O0FDOUZGLGlHQUFPLENBQUMsbUJBQVMsRUFBRSxPQUFTLENBQUMsbUNBQUU7QUFDL0I7QUFDQSxJQUFJLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtCQUFlO0FBQ25CLENBQUM7QUFBQSxrR0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkY7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9WaWV3cy8uL01haW5WaWV3L01haW5WaWV3LnNjc3M/MTdjMSIsIndlYnBhY2s6Ly9WaWV3cy8uL01haW5WaWV3L01haW5WaWV3LnRzeCIsIndlYnBhY2s6Ly9WaWV3cy8uL1ZpZXdQbHVnaW4vVmlld1BsdWdpbi50cyIsIndlYnBhY2s6Ly9WaWV3cy9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL1ZpZXdzL2V4dGVybmFsIHdpbmRvdyBcIlZpZXdGcmFtZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSAge1wiZXhwb3J0ZWRWYXJpYWJsZVwiOlwiXFxcIlNvbWUgU0FTUyBEZWZpbmVkIHZhbHVlXFxcIlwifTsiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcIlZpZXdGcmFtZVwiLCBcIi4vLi4vVmlld1BsdWdpbi9WaWV3UGx1Z2luXCIsIFwiLi9UYXNrcy5wbmdcIiwgXCIuL01haW5WaWV3LnNjc3NcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBSZWFjdCwgVmlld0ZyYW1lXzEsIFZpZXdQbHVnaW5fMSwgQmFja2dyb3VuZEltYWdlKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGV4cG9ydHMuQmFja2dyb3VuZEtpbmQgPSB2b2lkIDA7XG4gICAgdmFyIEJhY2tncm91bmRLaW5kO1xuICAgIChmdW5jdGlvbiAoQmFja2dyb3VuZEtpbmQpIHtcbiAgICAgICAgQmFja2dyb3VuZEtpbmRbQmFja2dyb3VuZEtpbmRbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICAgICAgQmFja2dyb3VuZEtpbmRbQmFja2dyb3VuZEtpbmRbXCJDb2xvclwiXSA9IDFdID0gXCJDb2xvclwiO1xuICAgICAgICBCYWNrZ3JvdW5kS2luZFtCYWNrZ3JvdW5kS2luZFtcIkltYWdlXCJdID0gMl0gPSBcIkltYWdlXCI7XG4gICAgfSkoQmFja2dyb3VuZEtpbmQgfHwgKGV4cG9ydHMuQmFja2dyb3VuZEtpbmQgPSBCYWNrZ3JvdW5kS2luZCA9IHt9KSk7XG4gICAgdmFyIFRhc2tMaXN0U2hvd1N0YXR1cztcbiAgICAoZnVuY3Rpb24gKFRhc2tMaXN0U2hvd1N0YXR1cykge1xuICAgICAgICBUYXNrTGlzdFNob3dTdGF0dXNbVGFza0xpc3RTaG93U3RhdHVzW1wiU2hvd1wiXSA9IDBdID0gXCJTaG93XCI7XG4gICAgICAgIFRhc2tMaXN0U2hvd1N0YXR1c1tUYXNrTGlzdFNob3dTdGF0dXNbXCJTaG93V3JhcHBlZFwiXSA9IDFdID0gXCJTaG93V3JhcHBlZFwiO1xuICAgICAgICBUYXNrTGlzdFNob3dTdGF0dXNbVGFza0xpc3RTaG93U3RhdHVzW1wiSGlkZVwiXSA9IDJdID0gXCJIaWRlXCI7XG4gICAgfSkoVGFza0xpc3RTaG93U3RhdHVzIHx8IChUYXNrTGlzdFNob3dTdGF0dXMgPSB7fSkpO1xuICAgIGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2hvd1Rhc2tzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSAodGhpcy5zdGF0ZS50YXNrTGlzdFNob3dTdGF0dXMgKyAxKSAlIDM7XG4gICAgICAgICAgICAgICAgaWYgKG5leHQgPT09IFRhc2tMaXN0U2hvd1N0YXR1cy5TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFza0xpc3RTaG93bigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFza0xpc3RTaG93U3RhdHVzOiBuZXh0IH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMub25BZGRUYXNrQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFkZFRhc2tCdXR0b25DbGlja2VkKHsgdGV4dDogaW5wdXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTW91c2VPdmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cGx1Z2luLnNob3dUb29sdGlwKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld3BsdWdpbi5oaWRlVG9vbHRpcCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3cGx1Z2luID0gY29udGV4dC5nZXRQbHVnaW5JbnN0YW5jZShWaWV3UGx1Z2luXzEuZGVmYXVsdCk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgdGFza3NDb3VudDogMCxcbiAgICAgICAgICAgICAgICB0YXNrTGlzdFNob3dTdGF0dXM6IFRhc2tMaXN0U2hvd1N0YXR1cy5TaG93XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaCgpIHtcbiAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3NDb3VudCA9IGF3YWl0IHRoaXMucHJvcHMuZ2V0VGFza3NDb3VudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXNrc0NvdW50IH0pO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIC8vIHRlc3QgZm9jdXNcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlld3BsdWdpbi5ub3RpZnlWaWV3TG9hZGVkKFwiTWFpbiBWaWV3XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYmFja2dyb3VuZEtpbmQgPT09IEJhY2tncm91bmRLaW5kLkltYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8gZXhhbXBsZSBvbiBob3cgdG8gdXNlIGFuIGltYWdlIHJlc291cmNlIGluIGNvZGVlXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7QmFja2dyb3VuZEltYWdlfSlgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlclZpZXdGcmFtZSgpIHtcbiAgICAgICAgICAgIC8vIGV4YW1wbGUgb24gaG93IHRvIHJlbmRlciBhIGNoaWxkIHZpZXdcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFZpZXdGcmFtZV8xLlZpZXdGcmFtZSwgeyBrZXk6IFwibGlzdF9mcmFtZVwiLCBuYW1lOiBcIkxpc3RWaWV3XCIsIGNsYXNzTmFtZTogXCJcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJMaXN0VmlldygpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgc2hvd2luZyB0aGUgY2FwYWJpbGl0eSBvZiBjaGlsZCB2aWV3cyBmcm9tIG1vdmluZyBhcm91bmQgaW4gRE9NIHdpdGhvdXQgbG9zaW5nIHN0YXRlXG4gICAgICAgICAgICAvLyBzdGF0ZSB3aWxsIG9ubHkgbG9zZWQgd2hlbiB1bm1vdW50ZWRcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS50YXNrTGlzdFNob3dTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFRhc2tMaXN0U2hvd1N0YXR1cy5TaG93OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJWaWV3RnJhbWUoKTtcbiAgICAgICAgICAgICAgICBjYXNlIFRhc2tMaXN0U2hvd1N0YXR1cy5TaG93V3JhcHBlZDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYmxvY2tlZC1saXN0XCIgfSwgdGhpcy5yZW5kZXJWaWV3RnJhbWUoKSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndyYXBwZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidGl0bGVcIiB9LCB0aGlzLnByb3BzLnRpdGxlTWVzc2FnZSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgY2xhc3NOYW1lOiBcInRhc2staW5wdXRcIiwgcmVmOiB0aGlzLmlucHV0UmVmLCBvbkNoYW5nZTogKCkgPT4gdGhpcy5wcm9wcy5pbnB1dENoYW5nZWQoKSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcInRhc2stYWRkXCIsIG9uQ2xpY2s6IHRoaXMub25BZGRUYXNrQnV0dG9uQ2xpY2tlZCwgb25Nb3VzZU92ZXI6IHRoaXMuaGFuZGxlTW91c2VPdmVyLCBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSB9LCBcIkFkZCBUYXNrXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwidGFza3MtdG9nZ2xlLXNob3dcIiwgb25DbGljazogdGhpcy50b2dnbGVTaG93VGFza3MgfSwgXCJTaG93L0Jsb2NrL0hpZGUgVGFza3NcIiksXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJMaXN0VmlldygpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YXNrc0NvdW50LFxuICAgICAgICAgICAgICAgICAgICBcIiB0YXNrKHMpXCIpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gTWFpblZpZXc7XG59KTtcbiIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgY29uc29sZS5sb2coXCJQbHVnaW4gbG9hZGVkXCIpO1xuICAgIGNsYXNzIFZpZXdQbHVnaW4ge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYXRpdmVPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlT2JqZWN0ID0gbmF0aXZlT2JqZWN0O1xuICAgICAgICB9XG4gICAgICAgIG5vdGlmeVZpZXdMb2FkZWQodmlld05hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlT2JqZWN0Lm5vdGlmeVZpZXdMb2FkZWQodmlld05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHNob3dUb29sdGlwKHgsIHkpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlT2JqZWN0LnNob3dUb29sdGlwKHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGVUb29sdGlwKCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVPYmplY3QuaGlkZVRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnRzLmRlZmF1bHQgPSBWaWV3UGx1Z2luO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiVmlld0ZyYW1lXCJdOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==