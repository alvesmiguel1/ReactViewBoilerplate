/*** Auto-generated ***/

namespace Sample.Avalonia {

    using BaseComponent = Sample.Avalonia.ExtendedReactView;
    using BaseModule = ReactViewControl.ViewModuleContainer;

    public delegate string PopupViewGetPopupDataEventHandler();
    public delegate void PopupViewOnBtnClickEventHandler();

    

    public partial interface IPopupViewModule {
        event PopupViewGetPopupDataEventHandler GetPopupData;
        event PopupViewOnBtnClickEventHandler OnBtnClick;
        void RefreshPopup();
    }
    
    public partial interface IPopupView : IPopupViewModule {}

    public partial class PopupViewModule : BaseModule, IPopupViewModule {
        
        internal interface IProperties {
            string GetPopupData();
            void OnBtnClick();
        }
        
        private class Properties : IProperties {
            protected PopupViewModule Owner { get; }
            public Properties(PopupViewModule owner) => Owner = owner;
            public string GetPopupData() => Owner.GetPopupData?.Invoke() ?? default(string);
            
            public void OnBtnClick() => Owner.OnBtnClick?.Invoke();
            
        }
        
        public event PopupViewGetPopupDataEventHandler GetPopupData;
        public event PopupViewOnBtnClickEventHandler OnBtnClick;
        public void RefreshPopup() => ExecutionEngine.ExecuteMethod(this, "refreshPopup");
        
        protected override string MainJsSource => "/Sample.Avalonia/Generated/Popup.js";
        protected override string NativeObjectName => "PopupView";
        protected override string ModuleName => "Popup";
        protected override object CreateNativeObject() => new Properties(this);
        protected override string[] Events => new string[] { "getPopupData","onBtnClick" };
        
        #if DEBUG
        protected override string Source => "/Users/miguel.alves/Documents/git/ReactViewBoilerplate/Sample.Avalonia/Generated/Popup.js";
        #endif
    }
    
    public partial class PopupView : BaseComponent, IPopupViewModule {
    
        public PopupView() : base(new PopupViewModule()) {
            InitializePopupView();
        }
    
        partial void InitializePopupView();
    
        protected new PopupViewModule MainModule => (PopupViewModule) base.MainModule;
    
        public event PopupViewGetPopupDataEventHandler GetPopupData {
            add => MainModule.GetPopupData += value;
            remove => MainModule.GetPopupData -= value;
        }
        public event PopupViewOnBtnClickEventHandler OnBtnClick {
            add => MainModule.OnBtnClick += value;
            remove => MainModule.OnBtnClick -= value;
        }
        public void RefreshPopup() => MainModule.RefreshPopup();
        
    }

}