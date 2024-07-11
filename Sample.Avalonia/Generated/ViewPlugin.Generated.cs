/*** Auto-generated ***/

namespace Sample.Avalonia {

    using BaseModule = ReactViewControl.ViewModuleContainer;

    public delegate void ViewPluginNotifyViewLoadedEventHandler(string viewName);
    public delegate void ViewPluginShowTooltipEventHandler(double x, double y);
    public delegate void ViewPluginHideTooltipEventHandler();

    

    public partial interface IViewPlugin {
        event ViewPluginNotifyViewLoadedEventHandler NotifyViewLoaded;
        event ViewPluginShowTooltipEventHandler ShowTooltip;
        event ViewPluginHideTooltipEventHandler HideTooltip;
    }
    
    public partial interface IViewPlugin {}

    public partial class ViewPlugin : BaseModule, IViewPlugin {
        
        internal interface IProperties {
            void NotifyViewLoaded(string viewName);
            void ShowTooltip(double x, double y);
            void HideTooltip();
        }
        
        private class Properties : IProperties {
            protected ViewPlugin Owner { get; }
            public Properties(ViewPlugin owner) => Owner = owner;
            public void NotifyViewLoaded(string viewName) => Owner.NotifyViewLoaded?.Invoke(viewName);
            
            public void ShowTooltip(double x, double y) => Owner.ShowTooltip?.Invoke(x, y);
            
            public void HideTooltip() => Owner.HideTooltip?.Invoke();
            
        }
        
        public event ViewPluginNotifyViewLoadedEventHandler NotifyViewLoaded;
        public event ViewPluginShowTooltipEventHandler ShowTooltip;
        public event ViewPluginHideTooltipEventHandler HideTooltip;
        
        protected override string MainJsSource => "/Sample.Avalonia/Generated/ViewPlugin.js";
        protected override string NativeObjectName => "ViewPlugin";
        protected override string ModuleName => "ViewPlugin";
        protected override object CreateNativeObject() => new Properties(this);
        protected override string[] Events => new string[] { "notifyViewLoaded","showTooltip","hideTooltip" };
        
        #if DEBUG
        protected override string Source => "/Users/viviana.bernardo/RiderProjects/ReactViewBoilerplate/Sample.Avalonia/Generated/ViewPlugin.js";
        #endif
    }
    
    

}