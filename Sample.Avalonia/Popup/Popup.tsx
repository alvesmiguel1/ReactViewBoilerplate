import * as React from "react";

export interface IPopupViewProperties {
    getPopupData(): Promise<string>;
    onBtnClick(): void;
}

interface IPopupViewState {
    popupData: string;
}

export interface IPopupViewBehaviors {
    refreshPopup(): void;
}

export default class PopupView extends React.Component<IPopupViewProperties, IPopupViewState> implements IPopupViewBehaviors {

    constructor(props: IPopupViewProperties) {
        super(props);

        this.state = {
            popupData: "hi",
        };
    }

    public async refreshPopup(): Promise<void> {
        const newPopupData = await this.props.getPopupData();
        this.setState({ popupData: newPopupData });
    }

    private onBtnClick = () => {
        this.props.onBtnClick();
    };
    
    public render(): JSX.Element {
        return (
            <div>
                <span>{this.state.popupData}</span>
                <br/>
                <input type="text"/>
                <br/>
                <button onClick={this.onBtnClick}>Close Popup</button>
            </div>
        );
    }
}
