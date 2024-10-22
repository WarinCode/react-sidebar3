import { ReactElement } from 'react'
import Wrapper from './containers/Wrapper'
import Sidebar from './components/Sidebar'

const App = (): ReactElement => {
  return (
    <Wrapper>
      <Sidebar/>
    </Wrapper>
  )
}

export default App;