export interface IViewPluginProperties {
    notifyViewLoaded(viewName: string): void;
    showTooltip(x: number, y: number): void;
    hideTooltip(): void;
}

console.log("Plugin loaded");

export default class ViewPlugin {

    constructor(private nativeObject: IViewPluginProperties) {
    }

    public notifyViewLoaded(viewName: string): void {
        this.nativeObject.notifyViewLoaded(viewName);
    }

    public showTooltip(x: number, y: number): void {
        this.nativeObject.showTooltip(x, y);
    }

    public hideTooltip(): void {
        this.nativeObject.hideTooltip();
    }
}
