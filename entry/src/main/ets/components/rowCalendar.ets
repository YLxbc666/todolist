import { DateDict } from '../data/dataType'

@Component
export struct RowCalendar {
  @State getTodayDate: string = "08"
  @State getTodayDay: string = "Thu"
  @State DateList: DateDict[] = []

  aboutToAppear() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDate();
    this.getTodayDate = dayOfWeek.toString().padStart(2, '0');
    this.getTodayDay = currentDate.toLocaleString('default', { weekday: 'short' }); // 星期几的中文或英文
    const dateBefore3Days = new Date(currentDate);
    const dateAfter3Days = new Date(currentDate);
    for (let i = 3; i > 0; i--) {
      dateBefore3Days.setDate(currentDate.getDate() - i);
      let push_item: DateDict = new DateDict(dateBefore3Days.getDate().toString().padStart(2, '0'),
        dateBefore3Days.toLocaleString('default', { weekday: 'short' }))
      this.DateList.push(push_item)
    }
    this.DateList.push(new DateDict(this.getTodayDate, this.getTodayDay))
    for (let i = 1; i < 4; i++) {
      dateAfter3Days.setDate(currentDate.getDate() + i);
      let push_item: DateDict = new DateDict(dateAfter3Days.getDate().toString().padStart(2, '0'),
        dateAfter3Days.toLocaleString('default', { weekday: 'short' }))
      this.DateList.push(push_item)
    }
  }

  build() {
    Flex({
      direction: FlexDirection.Row,
      justifyContent: FlexAlign.SpaceBetween,
      alignContent: FlexAlign.Center,
      alignItems: ItemAlign.Center
    }) {
      ForEach(this.DateList, (item: DateDict) => {
        if (this.getTodayDate === item.date) {
          Flex({
            direction: FlexDirection.Column,
            justifyContent: FlexAlign.SpaceAround,
            alignContent: FlexAlign.Center,
            alignItems: ItemAlign.Center
          }) {
            Text(item.date).fontSize(13).fontColor('#ffffff').fontWeight(600)
            Text(item.week).fontSize(13).fontColor('#ffffff').fontWeight(600)
            Flex().width(8).height(8).backgroundColor('#ffffff').borderRadius(8)
          }.size({ width: 50, height: 95 }).backgroundColor('#000000').padding(10).borderRadius(30)
        } else {
          Column({ space: 15 }) {
            Text(item.date).fontSize(14).fontColor('#9b9b9b')
            Text(item.week).fontSize(11).fontColor('#9b9b9b')
          }
        }
      })
    }
  }
}