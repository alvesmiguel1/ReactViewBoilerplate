import * as React from "react";

export interface IMainViewProperties {
    onBtnClick(): void;
}

export default class MainView extends React.Component<IMainViewProperties> {
    
    constructor(props: IMainViewProperties) {
        super(props);
    }

    private onBtnClick = () => {
        this.props.onBtnClick();
    };

    public render(): JSX.Element {
        return (
            <div className="wrapper">
                <button onClick={this.onBtnClick}>Create Popup with Input</button>
            </div>
        );
    }
}
