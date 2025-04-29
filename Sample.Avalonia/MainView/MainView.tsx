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
                <br/>
                <br/>
                <span>This is a checkbox.</span>
                <br/>
                <span>Try to check with the focus on the input of another (opened) window.</span>
                <br/>
                <br/>
                <input type="checkbox"/>
                <br/>
                <br/>
                <span>This is an input.</span>
                <br/>
                <span>Try to write some things here.</span>
                <br/>
                <br/>
                <input type="text"/>
                <br/>
                <br/>
                <button onClick={this.onBtnClick}>Click here to open another Window equal to this one.</button>
                <br/>
                <br/>
            </div>
        );
    }
}
