import './styles/App.css'
import {ComponentSiderBar} from './components/SiderBar/index'
import { ComponentVerticalBar } from './components/verticalBar/ComponentVerticalBar'
import { MainDate } from './components/MainDate'

import './responsive/styleResponsive.css'

function App() {
  

  return (
    <main id='main'>

      <ComponentVerticalBar />
      
      <MainDate />
      
      <ComponentSiderBar />
    </main>
  )
}

export default App
