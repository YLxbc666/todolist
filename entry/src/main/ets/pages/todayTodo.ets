import { RowCalendar } from '../components/rowCalendar'
import { TaskCard } from '../components/taskCard'

@Entry
@Component
export struct TodayToDo {
  @Builder
  builderTop() {
    Flex({
      direction: FlexDirection.Row,
      justifyContent: FlexAlign.SpaceBetween,
      alignContent: FlexAlign.Center,
      alignItems: ItemAlign.Center
    }) {
      Text("Today’s tasks").fontSize(20).fontColor('#4a4a4a')
      Image('images/userLogo.png')
        .width(45)
        .height(45)
        .borderRadius(45)
        .interpolation(ImageInterpolation.High)
        .objectFit(ImageFit.Fill)
        .border({
          width: 1,
          color: '#000000',
          style: BorderStyle.Dashed
        })
    }.size({ height: 48 })
  }

  @Builder
  dateShow() {
    Flex({
      direction: FlexDirection.Row,
      justifyContent: FlexAlign.SpaceBetween,
      alignContent: FlexAlign.Center,
      alignItems: ItemAlign.Center
    }) {
      Column({ space: 10 }) {
        Text("August 08").fontColor('#303642').fontSize(24).fontWeight(600).fontFamily('FilsonProMedium')
        Text("10 task today").fontColor('#afafaf').fontSize(14).fontFamily('FilsonProRegular')
      }.alignItems(HorizontalAlign.Start)

      Image('images/Frame4.png')
        .width(58)
        .height(58)
    }.margin({ top: 30 })
  }

  @Builder
  showDateList() {
    Flex({ direction: FlexDirection.Row }) {
      RowCalendar()
    }.margin({ top: 35 })
  }

  @Builder
  todoCardList() {
    Flex({ direction: FlexDirection.Column }) {
      TaskCard()
      TaskCard({ start_time: '9:30 AM' })
    }.margin({ top: 20 })
  }

  build() {
    Flex({ direction: FlexDirection.Column }) {
      this.builderTop()
      this.dateShow()
      this.showDateList()
      this.todoCardList()
    }.padding({ top: 11, right: 26, left: 26 })
  }
}