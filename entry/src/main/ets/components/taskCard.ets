@Component
export struct TaskCard {
  @State start_time: string = '09:00 AM'
  @State end_time: string = '10:00 AM'
  @State dec: string =
    'The Wallet App Design offers a sleek and intuitive interface for managing finances. It features easy access to transaction history, balance overview, and secure payment options. With customizable categories, real-time notifications, and biometric authentication, it ensures a seamless user experience while maintaining high security for sensitive financial data.'
  @State task_name: string = 'Website design with responsive'
  @State time_list: string[] = []

  aboutToAppear() {
    this.getTimeSlots(this.start_time, this.end_time);
  }

  parseTime(timeStr: string): Date {
    // 使用 Date.parse 或者手动解析时间字符串
    const time = timeStr.split(' ')[0];
    const modifier = timeStr.split(' ')[1];
    let hours = time.split(':').map(num => parseInt(num, 10))[0];
    let minutes = time.split(':').map(num => parseInt(num, 10))[1];

    // AM/PM 处理
    if (modifier === 'PM' && hours !== 12) {
      hours += 12; // 将 PM 时间转换为 24 小时制
    }
    if (modifier === 'AM' && hours === 12) {
      hours = 0; // 12 AM 应该转换为 0 点
    }

    // 返回 Date 对象
    return new Date(1970, 0, 1, hours, minutes); // 用 1970 年 1 月 1 日作为基准日期
  }

  getTimeSlots(startTime: string, endTime: string) {
    const startDate = this.parseTime(startTime); // 解析起始时间
    const endDate = this.parseTime(endTime); // 解析结束时间
    let currentTime = new Date(startDate);

    // 输出从 startTime 到 endTime 每半小时的时间
    while (currentTime <= endDate) {
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const modifier = Number(hours) < 12 ? 'AM' : 'PM';
      const adjustedHours = Number(hours) % 12 || 12; // 将 24 小时制转换为 12 小时制
      let s_hours = ''
      if (adjustedHours < 10) {
        s_hours = '0' + String(adjustedHours)
      } else {
        s_hours = String(adjustedHours)
      }

      this.time_list.push(`${s_hours}:${minutes} ${modifier}`)

      // 增加 30 分钟
      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }
  }

  build() {
    Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center }) {
      Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Start }) {
        ForEach(this.time_list, (item: string) => {
          Text(item).fontSize(15).fontColor('#cdcdcd').fontWeight(500)
        })
      }.size({ width: 107, height: (this.time_list.length * 44) })

      Stack({ alignContent: Alignment.BottomEnd }) {
        Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceBetween }) {
          Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween }) {
            Text(this.dec)
              .fontSize(13)
              .fontColor('#c3bdc2')
              .maxLines(2)// 限制最多显示两行
              .textOverflow({ overflow: TextOverflow.Ellipsis })// 超出部分显示省略号
              .width(170)
            Flex({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {
              Text("GO")
            }.size({ width: 40, height: 40 }).borderRadius(40).opacity(0.5).backgroundColor('#cccccc')
          }.padding({ right: 10 })

          Text(this.task_name)
            .fontSize(20)
            .fontColor('#363636')
            .fontWeight(600)
            .width(170)
            .maxLines(2)// 限制最多显示两行
            .textOverflow({ overflow: TextOverflow.Ellipsis })
            .padding({ bottom: (this.time_list.length * 10) - 10 })

        }
        .size({ width: 251, height: (this.time_list.length * 44) + 20 })
        .backgroundColor('#EDEBDE')
        .borderRadius(15)
        .padding({ left: 10, top: (this.time_list.length * 10) - 10 })

        Image('images/taskcardbg1.png').width(150).height((this.time_list.length * 44) + 20).rotate({ angle: 45 })
      }
    }.margin({ top: 15 })
  }
}