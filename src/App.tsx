import { RouterProvider } from 'react-router-dom'
import routerStore from './router/index.tsx'
import Header from './components/Header'
import Navigator from './components/Navigator'
import './css/App.css'
import './css/Icon.css'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function AppContainer() {
  return (
    <div className="app__container" style={{ display: 'flex' }}>

      <RouterProvider router={routerStore} />
      {/* 
      <PlatformListPage />
      <AccountDetailPage />
      <EditAccountDetailPage />
      <AddPlatformPage /> */}
    </div>
  )
}

function Footer() {
  return (
    <div id="footer"></div>
  )
}

function App() {
  return (
    <>
      <Header />
      <Navigator />
      <AppContainer />
      <Footer />
    </>
  )
}

export default App
