import { CategoriesCard } from '../components/categoriesCard'
import { OngoingTaskCard } from '../components/ongoingTasksCard'
import { font } from '@kit.ArkUI'

@Entry
@Component
export struct ToDoList {
  onPageShow() {
    font.registerFont({
      familyName: 'FilsonProMedium',
      familySrc: $rawfile('FilsonProMedium.otf')
    })
    font.registerFont({
      familyName: 'FilsonProRegular',
      familySrc: $rawfile('FilsonProRegular.otf')
    })
  }

  @Builder
  buildTopBar() {
    Flex({ direction: FlexDirection.RowReverse }) {
      Row({ space: 35 }) {
        Column({ space: 5 }) {
          Text("Hi Saad Shaikh").fontColor('#303642').fontSize(24).fontWeight(600).fontFamily('FilsonProMedium')
          Text("06 task pending").fontColor('#afafaf').fontSize(13).fontFamily('FilsonProRegular')
        }.alignItems(HorizontalAlign.Start)

        Image('images/userLogo.png')
          .width(45)
          .height(45)
          .borderRadius(45)
          .interpolation(ImageInterpolation.High)
          .objectFit(ImageFit.Fill)
          .margin(15)
          .border({
            width: 1,
            color: '#000000',
            style: BorderStyle.Dashed
          })
      }.width('100%').justifyContent(FlexAlign.SpaceBetween).alignItems(VerticalAlign.Center)
    }
    .width('100%')
    .height(60)
    .padding({ left: 31, right: 31, top: 13 })
  }

  @Builder
  buildSearchBar() {
    Flex({ direction: FlexDirection.Row }) {
      Row() {
        Row() {
          //左侧图标
          Image('images/search.png')
            .width(24)
            .height(24)
          //中间搜索框
          TextInput({ placeholder: "Search" })
            .type(InputType.Normal)
            .backgroundColor('#ebebeb')
            .height(58)
            .placeholderColor('#d7d7d7')
        }
        .size({ width: 237, height: 58 })
        .backgroundColor('#ebebeb')
        .borderRadius(30)
        .padding({
          left: 20,
          top: 17,
          bottom: 17,
          right: 37
        })

        Image('images/Frame.png')
          .width(58)
          .height(58)
          .margin(20)
      }.width('100%')
    }.width('100%').padding({ left: 31, right: 31, top: 13 }).margin({ top: 10 })
  }

  @Builder
  buildCategories() {
    Flex({ direction: FlexDirection.Row }) {
      Column() {
        Text("Categories").fontSize(20).fontColor('#303642').fontWeight(600).fontFamily('FilsonProMedium')
        Scroll() {
          Row({ space: 16 }) {
            CategoriesCard({ categories_name: "Mobile App", categories_count: '02' })
            CategoriesCard({ categories_name: "Gardening", categories_count: '05' })
            CategoriesCard({ categories_name: "test23", categories_count: '23' })
            CategoriesCard({ categories_name: "Mobile App", categories_count: '22' })
          }
        }
        .backgroundColor('#ffffff')
        .scrollable(ScrollDirection.Horizontal) // 滚动方向为水平方向
        .scrollBar(BarState.Off) // 滚动条常驻显示
        .edgeEffect(EdgeEffect.Spring) // 滚动到边沿后回弹
      }.alignItems(HorizontalAlign.Start)
    }.width('100%').padding({ left: 31, top: 13 }).margin({ top: 10 })
  }

  @Builder
  buildOngoingTasks() {
    Flex({ direction: FlexDirection.Row }) {
      Column() {
        Flex({
          direction: FlexDirection.Row,
          justifyContent: FlexAlign.SpaceBetween,
          alignItems: ItemAlign.Center
        }) {
          Text("Ongoing tasks").fontSize(20).fontColor('#303642').fontWeight(600).fontFamily('FilsonProMedium')
          Text("See all").fontSize(13).fontColor('#727272').fontFamily('FilsonProRegular')
        }.margin({ top: 20, bottom: 20 })

        Column({ space: 15 }) {
          OngoingTaskCard({
            task_name: 'Wallet App Design',
            start_time: "2:30 PM",
            end_time: "7: 00PM",
            progress: 0.56,
            task_dec: "The Wallet App Design offers a sleek and intuitive interface for managing finances. It features easy access to transaction history, balance overview, and secure payment options. With customizable categories, real-time notifications, and biometric authentication, it ensures a seamless user experience while maintaining high security for sensitive financial data."
          })
          OngoingTaskCard({
            task_name: 'Wallet App Design',
            start_time: "2:30 PM",
            end_time: "7: 00PM",
            progress: 0.12,
            task_dec: "The Wallet App Design offers a sleek and intuitive interface for managing finances. It features easy access to transaction history, balance overview, and secure payment options. With customizable categories, real-time notifications, and biometric authentication, it ensures a seamless user experience while maintaining high security for sensitive financial data."
          })
        }
      }
    }.width('100%').padding({ left: 31, right: 31, top: 13 }).margin({ top: 10 })
  }

  build() {
    Flex({ direction: FlexDirection.Column }) {
      this.buildTopBar()
      Scroll() {
        Column() {
          this.buildSearchBar()
          this.buildCategories()
          this.buildOngoingTasks()
        }
      }
      .backgroundColor('#ffffff')
      .scrollable(ScrollDirection.Vertical) // 滚动方向为水平方向
      .scrollBar(BarState.Off) // 滚动条常驻显示
      .edgeEffect(EdgeEffect.Spring) // 滚动到边沿后回弹
      .margin({ top: 10 })
    }
    .padding({
      top: 10
    })
    .height('100%')
    .backgroundColor('#ffffff')
  }
}