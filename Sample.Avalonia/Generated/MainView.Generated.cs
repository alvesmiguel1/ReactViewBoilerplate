/*** Auto-generated ***/

namespace Sample.Avalonia {

    using BaseComponent = Sample.Avalonia.ExtendedReactView;
    using BaseModule = ReactViewControl.ViewModuleContainer;

    public delegate double MainViewGetTasksCountEventHandler();
    public delegate void MainViewTaskListShownEventHandler();
    public delegate void MainViewInputChangedEventHandler();
    public delegate void MainViewAddTaskButtonClickedEventHandler(TaskCreationDetails taskDetails);

    public partial struct TaskCreationDetails {
        public string text { get; set; }
    }
    
    public enum BackgroundKind {
        None,
        Color,
        Image
    }

    public partial interface IMainViewModule {
        event MainViewGetTasksCountEventHandler GetTasksCount;
        event MainViewTaskListShownEventHandler TaskListShown;
        event MainViewInputChangedEventHandler InputChanged;
        event MainViewAddTaskButtonClickedEventHandler AddTaskButtonClicked;
        string TitleMessage { get; set; }
        BackgroundKind BackgroundKind { get; set; }
        void Refresh();
        ITaskListViewModule ListView { get; }
        
    }
    
    public partial interface IMainView : IMainViewModule {}

    public partial class MainViewModule : BaseModule, IMainViewModule {
        
        internal interface IProperties {
            double GetTasksCount();
            void TaskListShown();
            void InputChanged();
            void AddTaskButtonClicked(TaskCreationDetails taskDetails);
        }
        
        private class Properties : IProperties {
            protected MainViewModule Owner { get; }
            public Properties(MainViewModule owner) => Owner = owner;
            public double GetTasksCount() => Owner.GetTasksCount?.Invoke() ?? default(double);
            
            public void TaskListShown() => Owner.TaskListShown?.Invoke();
            
            public void InputChanged() => Owner.InputChanged?.Invoke();
            
            public void AddTaskButtonClicked(TaskCreationDetails taskDetails) => Owner.AddTaskButtonClicked?.Invoke(taskDetails);
            
        }
        
        public event MainViewGetTasksCountEventHandler GetTasksCount;
        public event MainViewTaskListShownEventHandler TaskListShown;
        public event MainViewInputChangedEventHandler InputChanged;
        public event MainViewAddTaskButtonClickedEventHandler AddTaskButtonClicked;
        public string TitleMessage { get; set; }
        public BackgroundKind BackgroundKind { get; set; }
        public void Refresh() => ExecutionEngine.ExecuteMethod(this, "refresh");
        public ITaskListViewModule ListView { get => GetOrAddChildView<TaskListViewModule>("ListView"); }
        
        protected override string MainJsSource => "/Sample.Avalonia/Generated/MainView.js";
        protected override string NativeObjectName => "MainView";
        protected override string ModuleName => "MainView";
        protected override object CreateNativeObject() => new Properties(this);
        protected override string[] Events => new string[] { "getTasksCount","taskListShown","inputChanged","addTaskButtonClicked" };
        protected override System.Collections.Generic.KeyValuePair<string, object>[] PropertiesValues {
            get { 
                return new System.Collections.Generic.KeyValuePair<string, object>[] {
                    new System.Collections.Generic.KeyValuePair<string, object>("titleMessage", TitleMessage),
                    new System.Collections.Generic.KeyValuePair<string, object>("backgroundKind", BackgroundKind)
                };
            }
        }
    
        #if DEBUG
        protected override string Source => "/Users/viviana.bernardo/RiderProjects/ReactViewBoilerplate/Sample.Avalonia/Generated/MainView.js";
        #endif
    }
    
    public partial class MainView : BaseComponent, IMainViewModule {
    
        public MainView() : base(new MainViewModule()) {
            InitializeMainView();
        }
    
        partial void InitializeMainView();
    
        protected new MainViewModule MainModule => (MainViewModule) base.MainModule;
    
        public event MainViewGetTasksCountEventHandler GetTasksCount {
            add => MainModule.GetTasksCount += value;
            remove => MainModule.GetTasksCount -= value;
        }
        public event MainViewTaskListShownEventHandler TaskListShown {
            add => MainModule.TaskListShown += value;
            remove => MainModule.TaskListShown -= value;
        }
        public event MainViewInputChangedEventHandler InputChanged {
            add => MainModule.InputChanged += value;
            remove => MainModule.InputChanged -= value;
        }
        public event MainViewAddTaskButtonClickedEventHandler AddTaskButtonClicked {
            add => MainModule.AddTaskButtonClicked += value;
            remove => MainModule.AddTaskButtonClicked -= value;
        }
        public string TitleMessage {
            get => MainModule.TitleMessage;
            set => MainModule.TitleMessage = value;
        }
        public BackgroundKind BackgroundKind {
            get => MainModule.BackgroundKind;
            set => MainModule.BackgroundKind = value;
        }
        public void Refresh() => MainModule.Refresh();
        
        public ITaskListViewModule ListView => MainModule.ListView;
        
    }

}