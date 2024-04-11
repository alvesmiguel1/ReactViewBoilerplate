using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using Avalonia;
using Avalonia.Controls;
using Avalonia.Controls.Primitives;
using Avalonia.Controls.Primitives.PopupPositioning;
using Avalonia.Media;
using Avalonia.Threading;
using Avalonia.VisualTree;
using ReactViewControl;
using WebViewControl;

namespace Sample.Avalonia {

    internal class TabView : ContentControl {
        private const int BorderThickness = 1;
        private const int CornerRadiusOSX = 9;
        private const int CornerRadiusWindows = 8;
        private const int DropShadowBlurRadius = 20;
        private const int DropShadowDepth = 20;
        private const int DropShadowDirection = 5;
        private const double DropShadowOpacity = 0.2;
        private const int MarginThickness = 10;
        private const int Padding = 2;
        private const int VerticalDistanceFromPointer = 10;
        
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

                    var tooltipView = new TooltipView();
                    tooltipView.Width = 125;
                    tooltipView.Height = 18;
                    tooltipView.GetTooltip += () => "refreshed tooltip";
                    tooltipView.RefreshTooltip();
                    
                    var tooltip = new Popup {
                        Child = new ContentControl { Content = tooltipView },
                        Focusable = false,
                        HorizontalOffset = x,
                        Placement = PlacementMode.AnchorAndGravity,
                        PlacementConstraintAdjustment = PopupPositionerConstraintAdjustment.FlipX | PopupPositionerConstraintAdjustment.FlipY,
                        PlacementGravity = PopupGravity.BottomRight,
                        PlacementAnchor = PopupAnchor.TopLeft,
                        PlacementRect = MeasurePlacementRect(this.GetVisualRoot() as Window, this, x, y),
                        PlacementTarget = this,
                        VerticalOffset = y + VerticalDistanceFromPointer,
                        WindowManagerAddShadowHint = false
                    };
                    
                    var content = (ContentControl)tooltip.Child;
                    content.Margin = new Thickness(MarginThickness);
                    content.Padding = new Thickness(Padding);
                    content.CornerRadius = new CornerRadius(RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? CornerRadiusWindows : CornerRadiusOSX);
                    content.Background = new SolidColorBrush(Color.Parse("#2C2F32"));
                    content.BorderBrush = new SolidColorBrush(Color.Parse("#3B3D41"));
                    content.BorderThickness = new Thickness(BorderThickness);
                    content.Effect = new DropShadowDirectionEffect {
                        ShadowDepth = DropShadowDepth, 
                        BlurRadius = DropShadowBlurRadius, 
                        Opacity = DropShadowOpacity, 
                        Color = Color.Parse("#2C2F32"), 
                        Direction = DropShadowDirection
                    };

                    ((ISetLogicalParent)tooltip).SetParent(this.GetVisualRoot() as Window);
                    tooltip.Open();
                    tooltipTargets.Push(tooltip);
                });
            }
        }

        private void OnHideTooltip() {
            lock (tooltipLock) {
                Dispatcher.UIThread.Invoke(() => {
                    foreach (var t in tooltipTargets) {
                        ((Popup)t).Close();
                        //ToolTip.SetTip(t, null);
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
        
        private static Rect MeasurePlacementRect(Window window, Visual target, double x, double y) {
            var renderScaling = window.RenderScaling;
                    
            // Calculate scaled window bounds
            var scaledWindowBounds = new PixelRect(
                x: (int)(window.Position.X * renderScaling),
                y: (int)(window.Position.Y * renderScaling),
                width: (int)(window.Bounds.Width * renderScaling),
                height: (int)(window.Bounds.Height * renderScaling)
            );
                    
            var controlPosition = target.PointToScreen(new Point(target.Bounds.Position.X, target.Bounds.Position.Y));
                    
            // Calculate the scaled position of the cursor within the browser
            var scaledCursorX = (int)(x * renderScaling);
            var scaledCursorY = (int)(y * renderScaling);
                    
            var activeScreen = window.Screens.ScreenFromBounds(new PixelRect(controlPosition.X + scaledCursorX, controlPosition.Y + scaledCursorY, 1, 1));
            return activeScreen == null ? default : scaledWindowBounds.Intersect(activeScreen.Bounds).ToRectWithDpi(renderScaling);
        }
    }
}
