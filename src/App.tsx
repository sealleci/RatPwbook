import LanguageSelect from './components/LanguageSelect'
import Navigator from './components/Navigator'
import PlatformListPage from './views/PlatformListPage'
import AccountDetailPage from './views/AccountDetailPage'
import EditAccountDetailPage from './views/EditAccountDetailPage'
import AddPlatformPage from './views/AddPlatformPage'
import './css/App.css'
import './css/icon.css'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function AppContainer() {
  return (
    <div className="app__container" style={{ display: 'flex' }}>
      <PlatformListPage />
      <AccountDetailPage />
      <EditAccountDetailPage />
      <AddPlatformPage />
    </div>
  )
}

function App() {
  return (
    <>
      <LanguageSelect />
      <Navigator />
      <AppContainer />
      <div id="footer"></div>
    </>
  )
}

export default App
