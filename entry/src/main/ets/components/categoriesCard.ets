import { CategoriesImage } from '../data/dataType'

@Component
export struct CategoriesCard {
  image_list: CategoriesImage[] = [
    new CategoriesImage('#FDE8C9', 'images/categories1.png'),
    new CategoriesImage('#FDE8C9', 'images/categories2.png'),
    new CategoriesImage('#E0EBDD', 'images/categories1.png'),
    new CategoriesImage('#E0EBDD', 'images/categories2.png'),
    new CategoriesImage('#ECDFE9', 'images/categories1.png'),
    new CategoriesImage('#ECDFE9', 'images/categories2.png'),
  ]
  @State randomImage: CategoriesImage = new CategoriesImage('#ECDFE9', 'image/categories2.png')
  @Prop categories_name: string = 'none'
  @Prop categories_count: string = '1'

  getRandomImage() {
    // 生成一个随机索引，范围是 [0, imageList.length)
    const randomIndex = Math.floor(Math.random() * this.image_list.length);
    // 获取随机元素
    this.randomImage = this.image_list[randomIndex]
  }

  // 组件生命周期
  aboutToAppear() {
    this.getRandomImage()
  }

  build() {
    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceBetween }) {
      Column() {
        Text(this.categories_name).fontColor('#4a4a4a').fontSize(20)
        Text(this.categories_count + ' Tasks').fontColor('#948f87').fontSize(15).margin({ top: 10 })
      }.padding({ left: 21, top: 21 }).alignItems(HorizontalAlign.Start)

      Image(this.randomImage.url)
        .width(85)
        .height(100)
        .alignSelf(ItemAlign.End)
        .borderRadius(15)
    }.size({ width: 157, height: 180 }).backgroundColor(this.randomImage.color).borderRadius(15).margin({ top: 20 })
  }
}