import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './store/index.ts'
import routerStore from './router/index.tsx'
import './utils/node_api'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routerStore} />
    </Provider>
  </StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
