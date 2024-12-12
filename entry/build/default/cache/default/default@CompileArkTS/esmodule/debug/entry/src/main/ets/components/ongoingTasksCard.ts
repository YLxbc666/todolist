if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface OngoingTaskCard_Params {
    color_list?: ColorList[];
    randomColor?: ColorList;
    task_name?: string;
    start_time?: string;
    end_time?: string;
    task_dec?: string;
    remind?: string;
    progress?: number;
    settings?: RenderingContextSettings;
    context?: CanvasRenderingContext2D;
}
import { ColorList } from "@bundle:com.example.note_me/entry/ets/data/dataType";
export class OngoingTaskCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.color_list = [
            new ColorList('#FDE8C9'),
            new ColorList('#EDEBDE'),
            new ColorList('#E0EBDD'),
        ];
        this.__randomColor = new ObservedPropertyObjectPU(new ColorList('#FDE8C9'), this, "randomColor");
        this.__task_name = new SynchedPropertySimpleOneWayPU(params.task_name, this, "task_name");
        this.__start_time = new SynchedPropertySimpleOneWayPU(params.start_time, this, "start_time");
        this.__end_time = new SynchedPropertySimpleOneWayPU(params.end_time, this, "end_time");
        this.__task_dec = new SynchedPropertySimpleOneWayPU(params.task_dec, this, "task_dec");
        this.__remind = new SynchedPropertySimpleOneWayPU(params.remind, this, "remind");
        this.__progress = new SynchedPropertySimpleOneWayPU(params.progress, this, "progress");
        this.settings = new RenderingContextSettings(true);
        this.context = new CanvasRenderingContext2D(this.settings);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: OngoingTaskCard_Params) {
        if (params.color_list !== undefined) {
            this.color_list = params.color_list;
        }
        if (params.randomColor !== undefined) {
            this.randomColor = params.randomColor;
        }
        if (params.task_name === undefined) {
            this.__task_name.set('none');
        }
        if (params.start_time === undefined) {
            this.__start_time.set('none');
        }
        if (params.end_time === undefined) {
            this.__end_time.set('none');
        }
        if (params.task_dec === undefined) {
            this.__task_dec.set('none');
        }
        if (params.remind === undefined) {
            this.__remind.set('1');
        }
        if (params.progress === undefined) {
            this.__progress.set(0.75);
        }
        if (params.settings !== undefined) {
            this.settings = params.settings;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: OngoingTaskCard_Params) {
        this.__task_name.reset(params.task_name);
        this.__start_time.reset(params.start_time);
        this.__end_time.reset(params.end_time);
        this.__task_dec.reset(params.task_dec);
        this.__remind.reset(params.remind);
        this.__progress.reset(params.progress);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__randomColor.purgeDependencyOnElmtId(rmElmtId);
        this.__task_name.purgeDependencyOnElmtId(rmElmtId);
        this.__start_time.purgeDependencyOnElmtId(rmElmtId);
        this.__end_time.purgeDependencyOnElmtId(rmElmtId);
        this.__task_dec.purgeDependencyOnElmtId(rmElmtId);
        this.__remind.purgeDependencyOnElmtId(rmElmtId);
        this.__progress.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__randomColor.aboutToBeDeleted();
        this.__task_name.aboutToBeDeleted();
        this.__start_time.aboutToBeDeleted();
        this.__end_time.aboutToBeDeleted();
        this.__task_dec.aboutToBeDeleted();
        this.__remind.aboutToBeDeleted();
        this.__progress.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private color_list: ColorList[];
    private __randomColor: ObservedPropertyObjectPU<ColorList>;
    get randomColor() {
        return this.__randomColor.get();
    }
    set randomColor(newValue: ColorList) {
        this.__randomColor.set(newValue);
    }
    private __task_name: SynchedPropertySimpleOneWayPU<string>;
    get task_name() {
        return this.__task_name.get();
    }
    set task_name(newValue: string) {
        this.__task_name.set(newValue);
    }
    private __start_time: SynchedPropertySimpleOneWayPU<string>;
    get start_time() {
        return this.__start_time.get();
    }
    set start_time(newValue: string) {
        this.__start_time.set(newValue);
    }
    private __end_time: SynchedPropertySimpleOneWayPU<string>;
    get end_time() {
        return this.__end_time.get();
    }
    set end_time(newValue: string) {
        this.__end_time.set(newValue);
    }
    private __task_dec: SynchedPropertySimpleOneWayPU<string>;
    get task_dec() {
        return this.__task_dec.get();
    }
    set task_dec(newValue: string) {
        this.__task_dec.set(newValue);
    }
    private __remind: SynchedPropertySimpleOneWayPU<string>;
    get remind() {
        return this.__remind.get();
    }
    set remind(newValue: string) {
        this.__remind.set(newValue);
    }
    private __progress: SynchedPropertySimpleOneWayPU<number>;
    get progress() {
        return this.__progress.get();
    }
    set progress(newValue: number) {
        this.__progress.set(newValue);
    }
    private settings: RenderingContextSettings;
    private context: CanvasRenderingContext2D;
    getRandomImage() {
        // 生成一个随机索引，范围是 [0, imageList.length)
        const randomIndex = Math.floor(Math.random() * this.color_list.length);
        // 获取随机元素
        this.randomColor = this.color_list[randomIndex];
    }
    // 组件生命周期
    aboutToAppear() {
        this.getRandomImage();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.size({ width: 330, height: 167 });
            Flex.backgroundColor(this.randomColor.color);
            Flex.borderRadius(30);
            Flex.padding({
                left: 16,
                top: 20,
                right: 16,
                bottom: 20
            });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.task_name);
            Text.fontColor('#363636');
            Text.fontSize(18);
            Text.fontWeight(600);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                direction: FlexDirection.Column,
                justifyContent: FlexAlign.Center,
                alignContent: FlexAlign.Center,
            });
            Flex.size({ width: 37, height: 20 });
            Flex.backgroundColor('#000000');
            Flex.borderRadius(10);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.remind + 'd');
            Text.fontColor('#ffffff');
            Text.fontSize(13);
            Text.fontWeight(600);
            Text.textAlign(TextAlign.Center);
            Text.width(37);
        }, Text);
        Text.pop();
        Flex.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Task describe");
            Text.margin({ top: 16 });
            Text.fontSize(15);
            Text.fontColor('#c3bdc2');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.task_dec);
            Text.margin({ top: 5 });
            Text.fontSize(15);
            Text.fontColor('#c3bdc2');
            Text.maxLines(2);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.width(200);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Row, alignContent: FlexAlign.Center });
            Flex.margin({ top: 20 });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('images/clock01.png');
            Image.width(20);
            Image.height(20);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.start_time);
            Text.fontSize(15);
            Text.fontColor('#c3bdc2');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(' - ');
            Text.fontSize(13);
            Text.fontColor('#c3bdc2');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.end_time);
            Text.fontSize(15);
            Text.fontColor('#c3bdc2');
        }, Text);
        Text.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create(this.context);
            Canvas.width(56);
            Canvas.height(56);
            Canvas.backgroundColor(this.randomColor.color);
            Canvas.onReady(() => {
                // 获取绘图上下文
                const ctx = this.context;
                // 开始绘制
                ctx.beginPath();
                // 绘制一个空心圆
                const centerX = 28; // 圆心的X坐标
                const centerY = 28; // 圆心的Y坐标
                const radius = 25; // 圆的半径
                // 绘制圆形路径
                ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
                ctx.strokeStyle = '#c4b9c1'; // 设置线条颜色
                ctx.lineWidth = 6; // 设置线条宽度
                // 绘制圆形的轮廓
                ctx.stroke();
            });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create(this.context);
            Canvas.width(56);
            Canvas.height(56);
            Canvas.backgroundColor(this.randomColor.color);
            Canvas.onReady(() => {
                // 获取绘图上下文
                const ctx = this.context;
                // 开始绘制
                ctx.beginPath();
                // 绘制一个空心圆
                const centerX = 28; // 圆心的X坐标
                const centerY = 28; // 圆心的Y坐标
                const radius = 25; // 圆的半径
                const endAngle = 2 * Math.PI * this.progress; // 计算结束角度，75% 对应的角度
                // 绘制圆形路径
                ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + endAngle);
                ctx.strokeStyle = '#000000'; // 设置线条颜色
                ctx.lineWidth = 6; // 设置线条宽度
                // 绘制圆形的轮廓
                ctx.stroke();
            });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(String(Math.floor(this.progress * 100)) + "%");
        }, Text);
        Text.pop();
        Stack.pop();
        Flex.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
