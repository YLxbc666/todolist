@Component
export struct PassageList {
  scroller: Scroller = new Scroller();

  build() {
    Scroll(this.scroller) {
      Column({ space: 20 }) {
        Row() {
          Text('123')
        }.width('100%').height(150).backgroundColor(0xF5DEB3).padding(10)

        Row() {
          Text('123')
        }.width('100%').height(150).backgroundColor(0xF5DEB3).padding(10)

        Row() {
          Text('123')
        }.width('100%').height(150).backgroundColor(0xF5DEB3).padding(10)

        Row() {
          Text('123')
        }.width('100%').height(150).backgroundColor(0xF5DEB3).padding(10)

        Row() {
          Text('123')
        }.width('100%').height(150).backgroundColor(0xF5DEB3).padding(10)
      }
      .width('100%')
      .alignItems(HorizontalAlign.Center)
      .padding({
        top: 10,
        bottom: 10,
        left: 5,
        right: 5
      })
    }
    .scrollable(ScrollDirection.Vertical) // 滚动方向为垂直方向
    .scrollBar(BarState.Off) // 滚动条常驻显示
    .scrollBarColor(Color.Gray) // 滚动条颜色
    .scrollBarWidth(10) // 滚动条宽度
    .edgeEffect(EdgeEffect.Spring) // 滚动到边沿后回弹
  }
}