(window["webpackChunkViews"] = window["webpackChunkViews"] || []).push([["TaskListView"],{

/***/ "./TaskListView/TaskListView.scss":
/*!****************************************!*\
  !*** ./TaskListView/TaskListView.scss ***!
  \****************************************/
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports =  {};

/***/ }),

/***/ "./TaskListView/TaskListView.tsx":
/*!***************************************!*\
  !*** ./TaskListView/TaskListView.tsx ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! ./../ViewPlugin/ViewPlugin */ "./ViewPlugin/ViewPlugin.ts"), __webpack_require__(/*! ResourceLoader */ "ResourceLoader"), __webpack_require__(/*! ./TaskListView.scss */ "./TaskListView/TaskListView.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, React, ViewPlugin_1, ResourceLoader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    class TaskListItem extends React.Component {
        constructor(props, context) {
            super(props, context);
        }
        render() {
            return (React.createElement("div", { className: "list-item" },
                React.createElement("input", { className: "check", type: "checkbox", defaultChecked: this.props.task.isCompleted }),
                React.createElement("div", { className: "content" },
                    React.createElement("div", { className: "text" }, this.props.task.text),
                    React.createElement("div", { className: "user" },
                        "Added by:",
                        React.createElement(ResourceLoader_1.ResourceLoader.Consumer, null, url => React.createElement("img", { className: "user-pic", src: url(this.props.task.user, "size=normal") }))))));
        }
    }
    class TaskListView extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.initialize();
            this.viewplugin = context.getPluginInstance(ViewPlugin_1.default);
        }
        toggleHideCompletedTasks() {
            this.setState(prevState => ({
                hideCompletedTasks: !prevState.hideCompletedTasks
            }));
        }
        refresh() {
            (async () => {
                const tasks = await this.props.getTasks();
                this.setState({ tasks });
            })();
        }
        async initialize() {
            this.state = {
                tasks: [],
                hideCompletedTasks: false
            };
            this.refresh();
        }
        componentDidMount() {
            this.viewplugin.notifyViewLoaded("Task List View");
        }
        renderItems() {
            return (React.createElement(React.Fragment, null, this.state.tasks.filter(t => !this.state.hideCompletedTasks || !t.isCompleted).map(t => React.createElement(TaskListItem, { key: t.id, task: t }))));
        }
        render() {
            return (React.createElement("div", { className: "wrapper" }, this.renderItems()));
        }
    }
    exports["default"] = TaskListView;
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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "ResourceLoader":
/*!*********************************!*\
  !*** external "ResourceLoader" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ResourceLoader"];

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./TaskListView/TaskListView.tsx"));
/******/ (window.Views = window.Views || {}).TaskListView = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdGVkL1Rhc2tMaXN0Vmlldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUNEQSxpR0FBTyxDQUFDLG1CQUFTLEVBQUUsT0FBUyxFQUFFLHlDQUFPLEVBQUUsbUZBQTRCLEVBQUUsMkRBQWdCLEVBQUUsa0ZBQXFCLENBQUMsbUNBQUU7QUFDL0c7QUFDQSxJQUFJLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHdCQUF3QjtBQUN6RSwrQ0FBK0MsbUZBQW1GO0FBQ2xJLDZDQUE2QyxzQkFBc0I7QUFDbkUsaURBQWlELG1CQUFtQjtBQUNwRSxpREFBaUQsbUJBQW1CO0FBQ3BFO0FBQ0EsZ0lBQWdJLHNFQUFzRTtBQUN0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBMQUEwTCxvQkFBb0I7QUFDOU07QUFDQTtBQUNBLGlEQUFpRCxzQkFBc0I7QUFDdkU7QUFDQTtBQUNBLElBQUksa0JBQWU7QUFDbkIsQ0FBQztBQUFBLGtHQUFDOzs7Ozs7Ozs7OztBQ3BERixpR0FBTyxDQUFDLG1CQUFTLEVBQUUsT0FBUyxDQUFDLG1DQUFFO0FBQy9CO0FBQ0EsSUFBSSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrQkFBZTtBQUNuQixDQUFDO0FBQUEsa0dBQUM7Ozs7Ozs7Ozs7OztBQ25CRjs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL1ZpZXdzLy4vVGFza0xpc3RWaWV3L1Rhc2tMaXN0Vmlldy5zY3NzPzg3MWYiLCJ3ZWJwYWNrOi8vVmlld3MvLi9UYXNrTGlzdFZpZXcvVGFza0xpc3RWaWV3LnRzeCIsIndlYnBhY2s6Ly9WaWV3cy8uL1ZpZXdQbHVnaW4vVmlld1BsdWdpbi50cyIsIndlYnBhY2s6Ly9WaWV3cy9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL1ZpZXdzL2V4dGVybmFsIHdpbmRvdyBcIlJlc291cmNlTG9hZGVyXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9ICB7fTsiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcIi4vLi4vVmlld1BsdWdpbi9WaWV3UGx1Z2luXCIsIFwiUmVzb3VyY2VMb2FkZXJcIiwgXCIuL1Rhc2tMaXN0Vmlldy5zY3NzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgUmVhY3QsIFZpZXdQbHVnaW5fMSwgUmVzb3VyY2VMb2FkZXJfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBjbGFzcyBUYXNrTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJsaXN0LWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogXCJjaGVja1wiLCB0eXBlOiBcImNoZWNrYm94XCIsIGRlZmF1bHRDaGVja2VkOiB0aGlzLnByb3BzLnRhc2suaXNDb21wbGV0ZWQgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0XCIgfSwgdGhpcy5wcm9wcy50YXNrLnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInVzZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBZGRlZCBieTpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVzb3VyY2VMb2FkZXJfMS5SZXNvdXJjZUxvYWRlci5Db25zdW1lciwgbnVsbCwgdXJsID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwidXNlci1waWNcIiwgc3JjOiB1cmwodGhpcy5wcm9wcy50YXNrLnVzZXIsIFwic2l6ZT1ub3JtYWxcIikgfSkpKSkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGFzcyBUYXNrTGlzdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXdwbHVnaW4gPSBjb250ZXh0LmdldFBsdWdpbkluc3RhbmNlKFZpZXdQbHVnaW5fMS5kZWZhdWx0KTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVIaWRlQ29tcGxldGVkVGFza3MoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIGhpZGVDb21wbGV0ZWRUYXNrczogIXByZXZTdGF0ZS5oaWRlQ29tcGxldGVkVGFza3NcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoKCkge1xuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrcyA9IGF3YWl0IHRoaXMucHJvcHMuZ2V0VGFza3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFza3MgfSk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIHRhc2tzOiBbXSxcbiAgICAgICAgICAgICAgICBoaWRlQ29tcGxldGVkVGFza3M6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdwbHVnaW4ubm90aWZ5Vmlld0xvYWRlZChcIlRhc2sgTGlzdCBWaWV3XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckl0ZW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0aGlzLnN0YXRlLnRhc2tzLmZpbHRlcih0ID0+ICF0aGlzLnN0YXRlLmhpZGVDb21wbGV0ZWRUYXNrcyB8fCAhdC5pc0NvbXBsZXRlZCkubWFwKHQgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChUYXNrTGlzdEl0ZW0sIHsga2V5OiB0LmlkLCB0YXNrOiB0IH0pKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3cmFwcGVyXCIgfSwgdGhpcy5yZW5kZXJJdGVtcygpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gVGFza0xpc3RWaWV3O1xufSk7XG4iLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiUGx1Z2luIGxvYWRlZFwiKTtcbiAgICBjbGFzcyBWaWV3UGx1Z2luIHtcbiAgICAgICAgY29uc3RydWN0b3IobmF0aXZlT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZU9iamVjdCA9IG5hdGl2ZU9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBub3RpZnlWaWV3TG9hZGVkKHZpZXdOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZU9iamVjdC5ub3RpZnlWaWV3TG9hZGVkKHZpZXdOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBzaG93VG9vbHRpcCh4LCB5KSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZU9iamVjdC5zaG93VG9vbHRpcCh4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBoaWRlVG9vbHRpcCgpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlT2JqZWN0LmhpZGVUb29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gVmlld1BsdWdpbjtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlc291cmNlTG9hZGVyXCJdOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==