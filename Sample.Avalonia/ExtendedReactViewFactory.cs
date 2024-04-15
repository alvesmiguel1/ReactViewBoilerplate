using ReactViewControl;
using WebViewControl;

namespace Sample.Avalonia {

    partial class ExtendedReactView {

        protected class ExtendedReactViewFactory : ReactViewFactory {

            public override ResourceUrl DefaultStyleSheet => null;
            
            public override IViewModule[] InitializePlugins() {
                return new IViewModule[] { };
            }

            public override bool ShowDeveloperTools => false;

            public override bool EnableViewPreload => true;

#if DEBUG
            public override bool EnableDebugMode => true;
#endif
        }
    }
}
