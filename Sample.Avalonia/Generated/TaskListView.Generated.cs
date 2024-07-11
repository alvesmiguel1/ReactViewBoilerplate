/*** Auto-generated ***/

namespace Sample.Avalonia {

    using BaseComponent = Sample.Avalonia.ExtendedReactView;
    using BaseModule = ReactViewControl.ViewModuleContainer;

    public delegate Task[] TaskListViewGetTasksEventHandler();

    public partial struct Task {
        public double id { get; set; }
        public string text { get; set; }
        public bool isCompleted { get; set; }
        public string user { get; set; }
    }

    public partial interface ITaskListViewModule {
        event TaskListViewGetTasksEventHandler GetTasks;
        void ToggleHideCompletedTasks();
        void Refresh();
    }
    
    public partial interface ITaskListView : ITaskListViewModule {}

    public partial class TaskListViewModule : BaseModule, ITaskListViewModule {
        
        internal interface IProperties {
            Task[] GetTasks();
        }
        
        private class Properties : IProperties {
            protected TaskListViewModule Owner { get; }
            public Properties(TaskListViewModule owner) => Owner = owner;
            public Task[] GetTasks() => Owner.GetTasks?.Invoke() ?? default(Task[]);
            
        }
        
        public event TaskListViewGetTasksEventHandler GetTasks;
        public void ToggleHideCompletedTasks() => ExecutionEngine.ExecuteMethod(this, "toggleHideCompletedTasks");
        public void Refresh() => ExecutionEngine.ExecuteMethod(this, "refresh");
        
        protected override string MainJsSource => "/Sample.Avalonia/Generated/TaskListView.js";
        protected override string NativeObjectName => "TaskListView";
        protected override string ModuleName => "TaskListView";
        protected override object CreateNativeObject() => new Properties(this);
        protected override string[] Events => new string[] { "getTasks" };
        
        #if DEBUG
        protected override string Source => "/Users/viviana.bernardo/RiderProjects/ReactViewBoilerplate/Sample.Avalonia/Generated/TaskListView.js";
        #endif
    }
    
    public partial class TaskListView : BaseComponent, ITaskListViewModule {
    
        public TaskListView() : base(new TaskListViewModule()) {
            InitializeTaskListView();
        }
    
        partial void InitializeTaskListView();
    
        protected new TaskListViewModule MainModule => (TaskListViewModule) base.MainModule;
    
        public event TaskListViewGetTasksEventHandler GetTasks {
            add => MainModule.GetTasks += value;
            remove => MainModule.GetTasks -= value;
        }
        public void ToggleHideCompletedTasks() => MainModule.ToggleHideCompletedTasks();
        
        public void Refresh() => MainModule.Refresh();
        
    }

}