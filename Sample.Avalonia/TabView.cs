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
        
        protected override Type StyleKeyOverride => typeof(ContentControl);

        private readonly MainView mainView;

        public TabView(int id) {
            mainView = new MainView();
            mainView.Focusable = true;
            mainView.OnBtnClick += OnShowPopup;
            Content = mainView;
        }

        private readonly object popupLock = new();
        
        private void OnShowPopup() {
            lock (popupLock) {
                Dispatcher.UIThread.Invoke(() => {
                    var window = new MainWindow {
                        Focusable = true,
                        Position = new PixelPoint(100, 100)
                    };
                    window.Show();
                });
            }
        }

        public void ShowDevTools() => mainView.ShowDeveloperTools();
    }
}
