import { PassageList } from '../components/passageList'
import { ToDoList } from './todoList'

AppStorage.setOrCreate('username', '');


@Entry
@Component
struct Index {
  build() {
    Tabs({ barPosition: BarPosition.End }) {
      TabContent() {
        ToDoList()
      }
      .tabBar('代办')

      TabContent() {

      }
      .tabBar("今日")

      TabContent() {

      }
      .tabBar("我的")
    }
  }
}