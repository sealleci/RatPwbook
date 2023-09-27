import LanguageSelect from './components/LanguageSelect'
import Navigator from './components/Navigator'
import PlatformListPage from './views/PlatformListPage'
import AccountDetailPage from './views/AccountDetailPage'
import EditAccountDetailPage from './views/EditAccountDetailPage'
import AddPlatformPage from './views/AddPlatformPage'
import './css/App.css'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function AppContainer() {
  return (
    <div className="app__container">
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
    </>
  )
}

export default App
