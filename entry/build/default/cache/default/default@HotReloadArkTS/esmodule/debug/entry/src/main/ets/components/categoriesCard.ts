if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CategoriesCard_Params {
    image_list?: CategoriesImage[];
    randomImage?: CategoriesImage;
    categories_name?: string;
    categories_count?: string;
}
import { CategoriesImage } from "@bundle:com.example.note_me/entry/ets/data/dataType";
export class CategoriesCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.image_list = [
            new CategoriesImage('#FDE8C9', 'images/categories1.png'),
            new CategoriesImage('#FDE8C9', 'images/categories2.png'),
            new CategoriesImage('#E0EBDD', 'images/categories1.png'),
            new CategoriesImage('#E0EBDD', 'images/categories2.png'),
            new CategoriesImage('#ECDFE9', 'images/categories1.png'),
            new CategoriesImage('#ECDFE9', 'images/categories2.png'),
        ];
        this.__randomImage = new ObservedPropertyObjectPU(new CategoriesImage('#ECDFE9', 'image/categories2.png'), this, "randomImage");
        this.__categories_name = new SynchedPropertySimpleOneWayPU(params.categories_name, this, "categories_name");
        this.__categories_count = new SynchedPropertySimpleOneWayPU(params.categories_count, this, "categories_count");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CategoriesCard_Params) {
        if (params.image_list !== undefined) {
            this.image_list = params.image_list;
        }
        if (params.randomImage !== undefined) {
            this.randomImage = params.randomImage;
        }
        if (params.categories_name === undefined) {
            this.__categories_name.set('none');
        }
        if (params.categories_count === undefined) {
            this.__categories_count.set('1');
        }
    }
    updateStateVars(params: CategoriesCard_Params) {
        this.__categories_name.reset(params.categories_name);
        this.__categories_count.reset(params.categories_count);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__randomImage.purgeDependencyOnElmtId(rmElmtId);
        this.__categories_name.purgeDependencyOnElmtId(rmElmtId);
        this.__categories_count.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__randomImage.aboutToBeDeleted();
        this.__categories_name.aboutToBeDeleted();
        this.__categories_count.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private image_list: CategoriesImage[];
    private __randomImage: ObservedPropertyObjectPU<CategoriesImage>;
    get randomImage() {
        return this.__randomImage.get();
    }
    set randomImage(newValue: CategoriesImage) {
        this.__randomImage.set(newValue);
    }
    private __categories_name: SynchedPropertySimpleOneWayPU<string>;
    get categories_name() {
        return this.__categories_name.get();
    }
    set categories_name(newValue: string) {
        this.__categories_name.set(newValue);
    }
    private __categories_count: SynchedPropertySimpleOneWayPU<string>;
    get categories_count() {
        return this.__categories_count.get();
    }
    set categories_count(newValue: string) {
        this.__categories_count.set(newValue);
    }
    getRandomImage() {
        // 生成一个随机索引，范围是 [0, imageList.length)
        const randomIndex = Math.floor(Math.random() * this.image_list.length);
        // 获取随机元素
        this.randomImage = this.image_list[randomIndex];
    }
    // 组件生命周期
    aboutToAppear() {
        this.getRandomImage();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceBetween });
            Flex.size({ width: 157, height: 180 });
            Flex.backgroundColor(this.randomImage.color);
            Flex.borderRadius(15);
            Flex.margin({ top: 20 });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({ left: 21, top: 21 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.categories_name);
            Text.fontColor('#4a4a4a');
            Text.fontSize(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.categories_count + ' Tasks');
            Text.fontColor('#948f87');
            Text.fontSize(15);
            Text.margin({ top: 10 });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.randomImage.url);
            Image.width(85);
            Image.height(100);
            Image.alignSelf(ItemAlign.End);
            Image.borderRadius(15);
        }, Image);
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
