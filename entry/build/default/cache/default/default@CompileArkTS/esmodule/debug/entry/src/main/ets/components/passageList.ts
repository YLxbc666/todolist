if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface PassageList_Params {
    scroller?: Scroller;
}
export class PassageList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.scroller = new Scroller();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PassageList_Params) {
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    updateStateVars(params: PassageList_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private scroller: Scroller;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create(this.scroller);
            Scroll.scrollable(ScrollDirection.Vertical);
            Scroll.scrollBar(BarState.Off);
            Scroll.scrollBarColor(Color.Gray);
            Scroll.scrollBarWidth(10);
            Scroll.edgeEffect(EdgeEffect.Spring);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
            Column.width('100%');
            Column.alignItems(HorizontalAlign.Center);
            Column.padding({
                top: 10,
                bottom: 10,
                left: 5,
                right: 5
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(150);
            Row.backgroundColor(0xF5DEB3);
            Row.padding(10);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('123');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(150);
            Row.backgroundColor(0xF5DEB3);
            Row.padding(10);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('123');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(150);
            Row.backgroundColor(0xF5DEB3);
            Row.padding(10);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('123');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(150);
            Row.backgroundColor(0xF5DEB3);
            Row.padding(10);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('123');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(150);
            Row.backgroundColor(0xF5DEB3);
            Row.padding(10);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('123');
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
