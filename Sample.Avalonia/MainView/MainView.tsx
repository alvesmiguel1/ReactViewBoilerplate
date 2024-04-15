import * as React from "react";

export interface IMainViewProperties {
    onBtnClick(): void;
    onFlyoutClick(): void;
}

export default class MainView extends React.Component<IMainViewProperties> {
    
    constructor(props: IMainViewProperties) {
        super(props);
    }

    private onBtnClick = () => {
        this.props.onBtnClick();
    };

    private onFlyoutClick = () => {
        this.props.onFlyoutClick();
    };

    public render(): JSX.Element {
        return (
            <div className="wrapper">
                <button onClick={this.onBtnClick}>Create Popup with Input</button>
                <br/>
                <br/>
                <button onClick={this.onFlyoutClick}>Create Flyout with Input</button>
            </div>
        );
    }
}
