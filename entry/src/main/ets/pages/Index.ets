import { PassageList } from '../components/passageList'
import { ToDoList } from './todoList'
import { TodayToDo } from './todayTodo'

AppStorage.setOrCreate('username', '');


@Entry
@Component
struct Index {
  build() {
    Tabs({ barPosition: BarPosition.End }) {
      TabContent() {
        ToDoList()
      }
      .tabBar('ToDo')

      TabContent() {
        TodayToDo()
      }
      .tabBar("Toady")

      TabContent() {

      }
      .tabBar("Me")
    }
  }
}