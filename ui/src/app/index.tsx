import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'
import './styles/styles.css'

import MainPage from '../pages/MainPage'

const App = () => {
  return (
    <MantineProvider>
      <MainPage />
    </MantineProvider>
  )
}

export default App
