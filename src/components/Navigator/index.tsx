import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { hideNav, selectNavDisplay } from '@/store/nav_display.ts'
import SearchBar from '@/components/SearchBar'
import { PlusIcon } from '@/components/Icon'
import './Navigator.less'

function HideNavigatorBtn() {
    const dispatch = useAppDispatch()

    function handleClick() {
        dispatch(hideNav())
    }

    return (
        <div id="hide-navigator-button-wrap">
            <div id="hide-navigator-button" onClick={handleClick}>
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
        <div id="navigator-bar" style={{ width: navDisplay ? "100%" : "0" }}>
            <div id="navigator-content">
                <SearchBar />
                <div id="navigator-system-list-wrap">
                    <div id="system-add-card-wrap">
                        <div id="system-add-card" className="system-card" onClick={redirectToAddPlatform}>
                            <PlusIcon />
                        </div>
                    </div>
                    <div id="navigator-system-list">
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
                <HideNavigatorBtn />
            </div>
        </div>
    )
}

export default Navigator
