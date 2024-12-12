import { ColorList } from '../data/dataType'

@Component
export struct OngoingTaskCard {
  color_list: ColorList[] = [
    new ColorList('#FDE8C9'),
    new ColorList('#EDEBDE'),
    new ColorList('#E0EBDD'),
  ]
  @State randomColor: ColorList = new ColorList('#FDE8C9')
  @Prop task_name: string = 'none'
  @Prop start_time: string = 'none'
  @Prop end_time: string = 'none'
  @Prop task_dec: string = 'none'
  @Prop remind: string = '1'
  @Prop progress: number = 0.75
  private settings: RenderingContextSettings = new RenderingContextSettings(true)
  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings)

  getRandomImage() {
    // 生成一个随机索引，范围是 [0, imageList.length)
    const randomIndex = Math.floor(Math.random() * this.color_list.length);
    // 获取随机元素
    this.randomColor = this.color_list[randomIndex]
  }

  // 组件生命周期
  aboutToAppear() {
    this.getRandomImage()
  }

  build() {
    Flex({ direction: FlexDirection.Column }) {
      Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {
        Text(this.task_name).fontColor('#363636').fontSize(18).fontWeight(600)
        Flex({
          direction: FlexDirection.Column,
          justifyContent: FlexAlign.Center,
          alignContent: FlexAlign.Center,
        }) {
          Text(this.remind + 'd')
            .fontColor('#ffffff')
            .fontSize(13)
            .fontWeight(600)
            .textAlign(TextAlign.Center)
            .width(37)
        }.size({ width: 37, height: 20 }).backgroundColor('#000000').borderRadius(10)
      }

      Text("Task describe").margin({ top: 16 }).fontSize(15).fontColor('#c3bdc2')

      Text(this.task_dec)
        .margin({ top: 5 })
        .fontSize(15)
        .fontColor('#c3bdc2')
        .maxLines(2)// 限制最多显示两行
        .textOverflow({ overflow: TextOverflow.Ellipsis })// 超出部分显示省略号
        .width(200)

      Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween }) {
        Flex({ direction: FlexDirection.Row, alignContent: FlexAlign.Center }) {
          Image('images/clock01.png').width(20).height(20)
          Text(this.start_time).fontSize(15).fontColor('#c3bdc2')
          Text(' - ').fontSize(13).fontColor('#c3bdc2')
          Text(this.end_time).fontSize(15).fontColor('#c3bdc2')
        }.margin({ top: 20 })

        Stack() {
          Canvas(this.context)
            .width(56)
            .height(56)
            .backgroundColor(this.randomColor.color)
            .onReady(() => {
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

          Canvas(this.context)
            .width(56)
            .height(56)
            .backgroundColor(this.randomColor.color)
            .onReady(() => {
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

          Text(String(Math.floor(this.progress * 100)) + "%")
        }
      }

    }
    .size({ width: 330, height: 167 })
    .backgroundColor(this.randomColor.color)
    .borderRadius(30)
    .padding({
      left: 16,
      top: 20,
      right: 16,
      bottom: 20
    })
  }
}