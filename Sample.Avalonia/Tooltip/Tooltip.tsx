import * as React from "react";

export interface ITooltipViewProperties {
    getTooltip(): Promise<string>;
}

interface ITooltipState {
    tooltipData: string;
}

export interface ITooltipViewBehaviors {
    refreshTooltip(): void;
}

export default class TooltipView extends React.Component<ITooltipViewProperties, ITooltipState> implements ITooltipViewBehaviors {

    constructor(props: ITooltipViewProperties) {
        super(props);

        this.state = {
            tooltipData: "this is a tooltip lol",
        };
    }
    
    public async refreshTooltip(): Promise<void> {
        const newTooltipData = await this.props.getTooltip();
        this.setState({ tooltipData: newTooltipData });
    }
    
    public render(): JSX.Element {
        const tooltipStyle: React.CSSProperties = {
            padding: 0,
            backgroundColor: "#2C2F32",
            color: 'white',
            fontSize: '16px'
        };
        
        return (
            <div style={tooltipStyle}>
                <span>{this.state.tooltipData}</span>
            </div>
        );
    }
}
