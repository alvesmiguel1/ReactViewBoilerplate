/*** Auto-generated ***/

namespace Sample.Avalonia {

    using BaseComponent = Sample.Avalonia.ExtendedReactView;
    using BaseModule = ReactViewControl.ViewModuleContainer;

    public delegate string TooltipViewGetTooltipEventHandler();

    

    public partial interface ITooltipViewModule {
        event TooltipViewGetTooltipEventHandler GetTooltip;
        void RefreshTooltip();
    }
    
    public partial interface ITooltipView : ITooltipViewModule {}

    public partial class TooltipViewModule : BaseModule, ITooltipViewModule {
        
        internal interface IProperties {
            string GetTooltip();
        }
        
        private class Properties : IProperties {
            protected TooltipViewModule Owner { get; }
            public Properties(TooltipViewModule owner) => Owner = owner;
            public string GetTooltip() => Owner.GetTooltip?.Invoke() ?? default(string);
            
        }
        
        public event TooltipViewGetTooltipEventHandler GetTooltip;
        public void RefreshTooltip() => ExecutionEngine.ExecuteMethod(this, "refreshTooltip");
        
        protected override string MainJsSource => "/Sample.Avalonia/Generated/Tooltip.js";
        protected override string NativeObjectName => "TooltipView";
        protected override string ModuleName => "Tooltip";
        protected override object CreateNativeObject() => new Properties(this);
        protected override string[] Events => new string[] { "getTooltip" };
        
        #if DEBUG
        protected override string Source => "/Users/viviana.bernardo/RiderProjects/ReactViewBoilerplate/Sample.Avalonia/Generated/Tooltip.js";
        #endif
    }
    
    public partial class TooltipView : BaseComponent, ITooltipViewModule {
    
        public TooltipView() : base(new TooltipViewModule()) {
            InitializeTooltipView();
        }
    
        partial void InitializeTooltipView();
    
        protected new TooltipViewModule MainModule => (TooltipViewModule) base.MainModule;
    
        public event TooltipViewGetTooltipEventHandler GetTooltip {
            add => MainModule.GetTooltip += value;
            remove => MainModule.GetTooltip -= value;
        }
        public void RefreshTooltip() => MainModule.RefreshTooltip();
        
    }

}