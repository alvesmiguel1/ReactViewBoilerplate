using System.Collections;
using System.Reactive;
using Avalonia;
using Avalonia.Controls;
using Avalonia.Input;
using Avalonia.Interactivity;
using Avalonia.Markup.Xaml;
using ReactiveUI;

namespace Sample.Avalonia {

    internal class MainWindow : Window {

        private int counter = 1;

        private TabControl tabs;

        public MainWindow() {
            AvaloniaXamlLoader.Load(this);

            tabs = this.FindControl<TabControl>("tabs");

            CreateTab();

#if DEBUG
            this.AttachDevTools(new KeyGesture(Key.F5));
#endif
        }

        public void CreateTab() {
            ((IList)tabs.Items).Add(new TabItem() {
                Header = "View " + counter,
                Content = new TabView(counter)
            });
            counter++;
        }

        private TabView SelectedView => (TabView) tabs.SelectedContent;

        private void OnNewTabClick(object sender, RoutedEventArgs e) => CreateTab();

        private void OnShowDevToolsMenuItemClick(object sender, RoutedEventArgs e) => SelectedView.ShowDevTools();
    }
}
