import { createBrowserRouter } from 'react-router-dom'
import PlatformListPage from '@/views/PlatformListPage'
import AccountDetailPage from '@/views/AccountDetailPage'
import EditAccountDetailPage from '@/views/EditAccountDetailPage'
import AddPlatformPage from '@/views/AddPlatformPage'

const routerStore = createBrowserRouter([
    {
        path: "/",
        element: <PlatformListPage />
    }
])

export default routerStore
