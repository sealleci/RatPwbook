import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '@/App'
import PlatformAccountListPage from '@/views/PlatformAccountListPage'
import AccountDetailPage from '@/views/AccountDetailPage'
import EditAccountDetailPage from '@/views/EditAccountDetailPage'
import AddPlatformPage from '@/views/AddPlatformPage'

const routerStore = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Navigate to="/account" replace={true} />
            }, {
                path: 'account',
                element: <PlatformAccountListPage />
            }, {
                path: 'detail',
                element: <AccountDetailPage />
            }, {
                path: 'edit',
                element: <EditAccountDetailPage />
            }, {
                path: 'add',
                element: <AddPlatformPage />
            }, {
                path: '*',
                element: <Navigate to="/account" replace={true} />
            }
        ]
    }
])

export default routerStore
