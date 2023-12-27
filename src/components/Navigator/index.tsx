import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { hideNav, selectNavDisplay } from '@/store/nav_display.ts'
import SearchBar from '@/components/SearchBar'
import { PlusIcon } from '@/components/Icon'
import './Navigator.less'

function HideNavigatorButton() {
    const dispatch = useAppDispatch()

    function handleClick() {
        dispatch(hideNav())
    }

    return (
        <div className="hide-nav-button-wrapper">
            <div className="hide-nav-button" onClick={handleClick}>
                <div></div>
            </div>
        </div>
    )
}

function Navigator() {
    const navDisplay = useAppSelector(selectNavDisplay)
    const navigate = useNavigate()

    function redirectToAddPlatform() {
        navigate('/add')
    }

    return (
        <div className="navigator" style={{ width: navDisplay ? "100%" : "0" }}>
            <div className="navigator__container">
                <SearchBar />
                <div className="system-list-wrapper">
                    <div className="add-system-button-wrapper">
                        <div className="add-system-button system-card" onClick={redirectToAddPlatform}>
                            <PlusIcon />
                        </div>
                    </div>
                    <div className="system-list">
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        {/* <div className="system-card system-card-active">QQ</div> */}
                    </div>
                </div>
                <HideNavigatorButton />
            </div>
        </div>
    )
}

export default Navigator
