if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ToDoList_Params {
}
import { CategoriesCard } from "@bundle:com.example.note_me/entry/ets/components/categoriesCard";
import { OngoingTaskCard } from "@bundle:com.example.note_me/entry/ets/components/ongoingTasksCard";
import font from "@ohos:font";
export class ToDoList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ToDoList_Params) {
    }
    updateStateVars(params: ToDoList_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    onPageShow() {
        font.registerFont({
            familyName: 'FilsonProMedium',
            familySrc: { "id": 0, "type": 30000, params: ['FilsonProMedium.otf'], "bundleName": "com.example.note_me", "moduleName": "entry" }
        });
        font.registerFont({
            familyName: 'FilsonProRegular',
            familySrc: { "id": 0, "type": 30000, params: ['FilsonProRegular.otf'], "bundleName": "com.example.note_me", "moduleName": "entry" }
        });
    }
    buildTopBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.RowReverse });
            Flex.width('100%');
            Flex.height(60);
            Flex.padding({ left: 31, right: 31, top: 13 });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 35 });
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Hi Saad Shaikh");
            Text.fontColor('#303642');
            Text.fontSize(24);
            Text.fontWeight(600);
            Text.fontFamily('FilsonProMedium');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("06 task pending");
            Text.fontColor('#afafaf');
            Text.fontSize(13);
            Text.fontFamily('FilsonProRegular');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('images/userLogo.png');
            Image.width(45);
            Image.height(45);
            Image.borderRadius(45);
            Image.interpolation(ImageInterpolation.High);
            Image.objectFit(ImageFit.Fill);
            Image.margin(15);
            Image.border({
                width: 1,
                color: '#000000',
                style: BorderStyle.Dashed
            });
        }, Image);
        Row.pop();
        Flex.pop();
    }
    buildSearchBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Row });
            Flex.width('100%');
            Flex.padding({ left: 31, right: 31, top: 13 });
            Flex.margin({ top: 10 });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.size({ width: 237, height: 58 });
            Row.backgroundColor('#ebebeb');
            Row.borderRadius(30);
            Row.padding({
                left: 20,
                top: 17,
                bottom: 17,
                right: 37
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //左侧图标
            Image.create('images/search.png');
            //左侧图标
            Image.width(24);
            //左侧图标
            Image.height(24);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //中间搜索框
            TextInput.create({ placeholder: "Search" });
            //中间搜索框
            TextInput.type(InputType.Normal);
            //中间搜索框
            TextInput.backgroundColor('#ebebeb');
            //中间搜索框
            TextInput.height(58);
            //中间搜索框
            TextInput.placeholderColor('#d7d7d7');
        }, TextInput);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('images/Frame.png');
            Image.width(58);
            Image.height(58);
            Image.margin(20);
        }, Image);
        Row.pop();
        Flex.pop();
    }
    buildCategories(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Row });
            Flex.width('100%');
            Flex.padding({ left: 31, top: 13 });
            Flex.margin({ top: 10 });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Categories");
            Text.fontSize(20);
            Text.fontColor('#303642');
            Text.fontWeight(600);
            Text.fontFamily('FilsonProMedium');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.backgroundColor('#ffffff');
            Scroll.scrollable(ScrollDirection.Horizontal);
            Scroll.scrollBar(BarState.Off);
            Scroll.edgeEffect(EdgeEffect.Spring);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 16 });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CategoriesCard(this, { categories_name: "Mobile App", categories_count: '02' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/todoList.ets", line: 88, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            categories_name: "Mobile App",
                            categories_count: '02'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        categories_name: "Mobile App", categories_count: '02'
                    });
                }
            }, { name: "CategoriesCard" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CategoriesCard(this, { categories_name: "Gardening", categories_count: '05' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/todoList.ets", line: 89, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            categories_name: "Gardening",
                            categories_count: '05'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        categories_name: "Gardening", categories_count: '05'
                    });
                }
            }, { name: "CategoriesCard" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CategoriesCard(this, { categories_name: "test23", categories_count: '23' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/todoList.ets", line: 90, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            categories_name: "test23",
                            categories_count: '23'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        categories_name: "test23", categories_count: '23'
                    });
                }
            }, { name: "CategoriesCard" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CategoriesCard(this, { categories_name: "Mobile App", categories_count: '22' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/todoList.ets", line: 91, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            categories_name: "Mobile App",
                            categories_count: '22'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        categories_name: "Mobile App", categories_count: '22'
                    });
                }
            }, { name: "CategoriesCard" });
        }
        Row.pop();
        Scroll.pop();
        Column.pop();
        Flex.pop();
    }
    buildOngoingTasks(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Row });
            Flex.width('100%');
            Flex.padding({ left: 31, right: 31, top: 13 });
            Flex.margin({ top: 10 });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                direction: FlexDirection.Row,
                justifyContent: FlexAlign.SpaceBetween,
                alignItems: ItemAlign.Center
            });
            Flex.margin({ top: 20, bottom: 20 });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Ongoing tasks");
            Text.fontSize(20);
            Text.fontColor('#303642');
            Text.fontWeight(600);
            Text.fontFamily('FilsonProMedium');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("See all");
            Text.fontSize(13);
            Text.fontColor('#727272');
            Text.fontFamily('FilsonProRegular');
        }, Text);
        Text.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 15 });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new OngoingTaskCard(this, {
                        task_name: 'Wallet App Design',
                        start_time: "2:30 PM",
                        end_time: "7: 00PM",
                        progress: 0.56,
                        task_dec: "The Wallet App Design offers a sleek and intuitive interface for managing finances. It features easy access to transaction history, balance overview, and secure payment options. With customizable categories, real-time notifications, and biometric authentication, it ensures a seamless user experience while maintaining high security for sensitive financial data."
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/todoList.ets", line: 116, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            task_name: 'Wallet App Design',
                            start_time: "2:30 PM",
                            end_time: "7: 00PM",
                            progress: 0.56,
                            task_dec: "The Wallet App Design offers a sleek and intuitive interface for managing finances. It features easy access to transaction history, balance overview, and secure payment options. With customizable categories, real-time notifications, and biometric authentication, it ensures a seamless user experience while maintaining high security for sensitive financial data."
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        task_name: 'Wallet App Design',
                        start_time: "2:30 PM",
                        end_time: "7: 00PM",
                        progress: 0.56,
                        task_dec: "The Wallet App Design offers a sleek and intuitive interface for managing finances. It features easy access to transaction history, balance overview, and secure payment options. With customizable categories, real-time notifications, and biometric authentication, it ensures a seamless user experience while maintaining high security for sensitive financial data."
                    });
                }
            }, { name: "OngoingTaskCard" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new OngoingTaskCard(this, {
                        task_name: 'Wallet App Design',
                        start_time: "2:30 PM",
                        end_time: "7: 00PM",
                        progress: 0.12,
                        task_dec: "The Wallet App Design offers a sleek and intuitive interface for managing finances. It features easy access to transaction history, balance overview, and secure payment options. With customizable categories, real-time notifications, and biometric authentication, it ensures a seamless user experience while maintaining high security for sensitive financial data."
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/todoList.ets", line: 123, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            task_name: 'Wallet App Design',
                            start_time: "2:30 PM",
                            end_time: "7: 00PM",
                            progress: 0.12,
                            task_dec: "The Wallet App Design offers a sleek and intuitive interface for managing finances. It features easy access to transaction history, balance overview, and secure payment options. With customizable categories, real-time notifications, and biometric authentication, it ensures a seamless user experience while maintaining high security for sensitive financial data."
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        task_name: 'Wallet App Design',
                        start_time: "2:30 PM",
                        end_time: "7: 00PM",
                        progress: 0.12,
                        task_dec: "The Wallet App Design offers a sleek and intuitive interface for managing finances. It features easy access to transaction history, balance overview, and secure payment options. With customizable categories, real-time notifications, and biometric authentication, it ensures a seamless user experience while maintaining high security for sensitive financial data."
                    });
                }
            }, { name: "OngoingTaskCard" });
        }
        Column.pop();
        Column.pop();
        Flex.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.padding({
                top: 10
            });
            Flex.height('100%');
            Flex.backgroundColor('#ffffff');
        }, Flex);
        this.buildTopBar.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.backgroundColor('#ffffff');
            Scroll.scrollable(ScrollDirection.Vertical);
            Scroll.scrollBar(BarState.Off);
            Scroll.edgeEffect(EdgeEffect.Spring);
            Scroll.margin({ top: 10 });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.buildSearchBar.bind(this)();
        this.buildCategories.bind(this)();
        this.buildOngoingTasks.bind(this)();
        Column.pop();
        Scroll.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ToDoList";
    }
}
registerNamedRoute(() => new ToDoList(undefined, {}), "", { bundleName: "com.example.note_me", moduleName: "entry", pagePath: "pages/todoList", pageFullPath: "entry/src/main/ets/pages/todoList", integratedHsp: "false" });
