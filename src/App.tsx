import { useEffect, useRef, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '@/store/hooks.ts'
import { hideNav, showNav } from '@/store/nav_display.ts'
import Header from './components/Header'
import Navigator from './components/Navigator'
import './less/App.less'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function AppContainer() {
  return (
    <div className="app__container" style={{ display: 'flex' }}>
      <Outlet />
    </div>
  )
}

function Footer() {
  return (
    <div id="footer"></div>
  )
}

function App() {
  const isSmallScreen = useRef<boolean>(false)
  const dispatch = useAppDispatch()
  const observer = useMemo(() => new ResizeObserver(
    () => {
      if (document.body.clientWidth > 640) {
        dispatch(showNav())
        isSmallScreen.current = false
      } else {
        if (!isSmallScreen.current) {
          dispatch(hideNav())
        }

        isSmallScreen.current = true
      }
    }
  ), [dispatch])

  useEffect(() => {
    observer.observe(document.body)
  }, [observer])

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
