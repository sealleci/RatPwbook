import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { showNav, hideNav, selectNavDisplay } from '@/store/nav_display.ts'
import MySelect from '@/components/MySelect'
import { ListIcon } from '@/components/Icon'
import './Header.less'

function ShowNavigatorBtn() {
    const navDisplay = useAppSelector(selectNavDisplay)
    const dispatch = useAppDispatch()

    function handleClick() {
        if (navDisplay) {
            dispatch(hideNav())
        } else {
            dispatch(showNav())
        }
    }

    return (
        <div id="show-navigator-bar-button" className="custom-button" onClick={handleClick}>
            <ListIcon />
        </div>
    )
}

function MessageBar() {
    return (
        <div id="message-bar">
            <div style={{ display: "block" }}>
            </div>
        </div>
    )
}

function Header() {
    return (
        <div id="language-bar">
            <ShowNavigatorBtn />
            <MessageBar />
            <MySelect />
        </div>
    )
}

export default Header