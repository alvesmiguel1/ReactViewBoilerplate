using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using Avalonia;
using Avalonia.Controls;
using Avalonia.Controls.Diagnostics;
using Avalonia.Controls.Primitives;
using Avalonia.Controls.Primitives.PopupPositioning;
using Avalonia.Threading;
using ReactViewControl;
using WebViewControl;

namespace Sample.Avalonia {

    internal class TabView : ContentControl {

        protected override Type StyleKeyOverride => typeof(ContentControl);

        private MainView mainView;
        private TaskListViewModule taskListView;
        private int taskCounter;

        private readonly List<Task> taskList = new() {
            new() { id = 0, text = "Learn react.js", isCompleted = true, user = "User1" },
            new() { id = 1, text = "Explore the ReactView framework", user = "User2" }
        };

        public TabView(int id) {
            taskCounter = taskList.Count;

            mainView = new MainView();
            mainView.Focusable = true;
            mainView.TitleMessage = "Tasks List (" + id + ")";
            mainView.BackgroundKind = BackgroundKind.Image;
            mainView.AddTaskButtonClicked += OnMainViewAddTaskButtonClicked;
            mainView.GetTasksCount += () => taskList.Count;
            mainView.TaskListShown += () => taskListView.Load();
            mainView.WithPlugin<ViewPlugin>().NotifyViewLoaded += viewName => AppendLog(viewName + " loaded");
            mainView.WithPlugin<ViewPlugin>().ShowTooltip += OnShowTooltip;
            mainView.WithPlugin<ViewPlugin>().HideTooltip += OnHideTooltip;
            
            taskListView = (TaskListViewModule)mainView.ListView;
            taskListView.GetTasks += () => taskList.ToArray();

            // this is an example of dynamic resources support
            taskListView.CustomResourceRequested += OnTaskListViewCustomResourceRequested;

            taskListView.WithPlugin<ViewPlugin>().NotifyViewLoaded += (viewName) => AppendLog(viewName + " loaded (child)");
            taskListView.Load();

            Content = mainView;
        }

        private readonly object tooltipLock = new();
        private readonly ConcurrentStack<Control> tooltipTargets = new();
        
        private void OnShowTooltip(double x, double y) {
            lock (tooltipLock) {
                Dispatcher.UIThread.Invoke(() => {
                    var toolTip = new ToolTip { Content = "This is a tooltip, welcome." };

                    if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows)) {
                        ToolTip.SetPlacement(this, PlacementMode.AnchorAndGravity);
                        //ToolTip.SetHorizontalOffset(this, 0);
                        //ToolTip.SetVerticalOffset(this, 0);
                    }
            

                    ToolTip.SetTip(this, toolTip);
                    ToolTip.SetIsOpen(this, true);
                    tooltipTargets.Push(this);

                    if (toolTip is not IPopupHostProvider { PopupHost: not null } popupHostProvider) {
                        return;
                    }

                    if (popupHostProvider.PopupHost is not PopupRoot popupRoot) {
                        return;
                    }

                    if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows)) {
                        popupHostProvider.PopupHost.ConfigurePosition(
                            this,
                            PlacementMode.AnchorAndGravity,
                            new Point(x, y + 10),
                            PopupAnchor.TopLeft,
                            PopupGravity.BottomRight,
                            PopupPositionerConstraintAdjustment.FlipX | PopupPositionerConstraintAdjustment.FlipY | PopupPositionerConstraintAdjustment.SlideX | PopupPositionerConstraintAdjustment.SlideY | PopupPositionerConstraintAdjustment.ResizeX | PopupPositionerConstraintAdjustment.ResizeY
                        );
                    }

                    popupRoot.WindowManagerAddShadowHint = true;

                });
            }
        }
        
        private void OnHideTooltip() {
            lock (tooltipLock) {
                Dispatcher.UIThread.Invoke(() => {
                    foreach (var t in tooltipTargets) {
                        ToolTip.SetTip(t, null);
                    }
                    tooltipTargets.Clear();
                });
            }
        }

        private void OnMainViewAddTaskButtonClicked(TaskCreationDetails taskDetails) {
            taskList.Add(new Task() {
                id = taskCounter++,
                text = taskDetails.text,
                user = "User1"
            });
            mainView.Refresh(); // refresh task counter
            taskListView.Refresh(); // refresh task list
            AppendLog("Added task: " + taskDetails.text);
        }

        public void ToggleHideCompletedTasks() => taskListView.ToggleHideCompletedTasks();

        public void ShowDevTools() => mainView.ShowDeveloperTools();

        public void ToggleIsEnabled() => mainView.IsEnabled = !mainView.IsEnabled;

        public ReactViewControl.EditCommands EditCommands => mainView.EditCommands;

        private void AppendLog(string log) {
            Dispatcher.UIThread.Post(() => {
                var status = this.FindControl<TextBox>("status");
                status.Text = DateTime.Now + ": " + log + Environment.NewLine + status.Text;
            });
        }

        private Resource OnTaskListViewCustomResourceRequested(string resourceKey, params string[] options) {
            return new Resource(ResourcesManager.GetResource(GetType().Assembly, new[] { "Users", resourceKey + ".png" }));
        }
    }
}
