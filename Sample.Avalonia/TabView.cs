using System;
using System.Collections.Concurrent;
using System.Runtime.InteropServices;
using Avalonia;
using Avalonia.Controls;
using Avalonia.Controls.Primitives;
using Avalonia.Controls.Primitives.PopupPositioning;
using Avalonia.Media;
using Avalonia.Threading;
using Avalonia.VisualTree;

namespace Sample.Avalonia {

    internal class TabView : ContentControl {
        private new const int BorderThickness = 1;
        private const int MarginThickness = 10;
        private new const int Padding = 2;
        
        protected override Type StyleKeyOverride => typeof(ContentControl);

        private readonly MainView mainView;

        public TabView(int id) {
            mainView = new MainView();
            mainView.Focusable = true;
            mainView.OnBtnClick += OnShowPopup;

            Content = mainView;
        }

        private readonly object popupLock = new();
        private readonly ConcurrentStack<Control> targets = new();
        
        private void OnShowPopup() {
            lock (popupLock) {
                Dispatcher.UIThread.Invoke(() => {

                    var popupView = new PopupView();
                    popupView.GetPopupData += () => "Hello, this is a popup, write some things:";
                    popupView.OnBtnClick += OnHideTooltip;
                    popupView.RefreshPopup();
                    popupView.Width = 500;
                    popupView.Height = 500;
                    
                    var popup = new Popup {
                        Child = new ContentControl { Content = popupView },
                        Focusable = true,
                        IsEnabled = true,
                        HorizontalOffset = 100,
                        Placement = PlacementMode.AnchorAndGravity,
                        PlacementConstraintAdjustment = PopupPositionerConstraintAdjustment.FlipX | PopupPositionerConstraintAdjustment.FlipY,
                        PlacementGravity = PopupGravity.BottomRight,
                        PlacementAnchor = PopupAnchor.TopLeft,
                        PlacementRect = MeasurePlacementRect(this.GetVisualRoot() as Window, this, 100, 100),
                        PlacementTarget = this,
                        VerticalOffset = 100,
                        WindowManagerAddShadowHint = false
                    };


                    var content = (ContentControl)popup.Child;
                    content.Margin = new Thickness(MarginThickness);
                    content.Padding = new Thickness(Padding);
                    content.BorderThickness = new Thickness(BorderThickness);

                    ((ISetLogicalParent)popup).SetParent(this.GetVisualRoot() as Window);
                    targets.Push(popup);
                    popup.Open();
                });
            }
        }

        private void OnHideTooltip() {
            lock (popupLock) {
                Dispatcher.UIThread.Invoke(() => {
                    foreach (var t in targets) {
                        ((Popup)t).Close();
                    }
                    targets.Clear();
                });
            }
        }

        public void ShowDevTools() => mainView.ShowDeveloperTools();

        public void ToggleIsEnabled() => mainView.IsEnabled = !mainView.IsEnabled;

        public ReactViewControl.EditCommands EditCommands => mainView.EditCommands;
        
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
