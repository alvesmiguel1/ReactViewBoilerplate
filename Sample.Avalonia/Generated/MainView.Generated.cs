/*** Auto-generated ***/

namespace Sample.Avalonia {

    using BaseComponent = Sample.Avalonia.ExtendedReactView;
    using BaseModule = ReactViewControl.ViewModuleContainer;

    public delegate void MainViewOnBtnClickEventHandler();
    public delegate void MainViewOnFlyoutClickEventHandler();

    

    public partial interface IMainViewModule {
        event MainViewOnBtnClickEventHandler OnBtnClick;
        event MainViewOnFlyoutClickEventHandler OnFlyoutClick;
    }
    
    public partial interface IMainView : IMainViewModule {}

    public partial class MainViewModule : BaseModule, IMainViewModule {
        
        internal interface IProperties {
            void OnBtnClick();
            void OnFlyoutClick();
        }
        
        private class Properties : IProperties {
            protected MainViewModule Owner { get; }
            public Properties(MainViewModule owner) => Owner = owner;
            public void OnBtnClick() => Owner.OnBtnClick?.Invoke();
            
            public void OnFlyoutClick() => Owner.OnFlyoutClick?.Invoke();
            
        }
        
        public event MainViewOnBtnClickEventHandler OnBtnClick;
        public event MainViewOnFlyoutClickEventHandler OnFlyoutClick;
        
        protected override string MainJsSource => "/Sample.Avalonia/Generated/MainView.js";
        protected override string NativeObjectName => "MainView";
        protected override string ModuleName => "MainView";
        protected override object CreateNativeObject() => new Properties(this);
        protected override string[] Events => new string[] { "onBtnClick","onFlyoutClick" };
        
        #if DEBUG
        protected override string Source => "/Users/miguel.alves/Documents/git/ReactViewBoilerplate/Sample.Avalonia/Generated/MainView.js";
        #endif
    }
    
    public partial class MainView : BaseComponent, IMainViewModule {
    
        public MainView() : base(new MainViewModule()) {
            InitializeMainView();
        }
    
        partial void InitializeMainView();
    
        protected new MainViewModule MainModule => (MainViewModule) base.MainModule;
    
        public event MainViewOnBtnClickEventHandler OnBtnClick {
            add => MainModule.OnBtnClick += value;
            remove => MainModule.OnBtnClick -= value;
        }
        public event MainViewOnFlyoutClickEventHandler OnFlyoutClick {
            add => MainModule.OnFlyoutClick += value;
            remove => MainModule.OnFlyoutClick -= value;
        }
    }

}