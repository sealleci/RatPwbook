import { useAppDispatch } from '../store/hooks.ts'
import { showNav } from '../store/nav_display.ts'
import LanguageSelect from './LanguageSelect'
import { ListIcon } from './Icon'
import '../css/Header.css'

function ShowNavigatorBtn() {
    const dispatch = useAppDispatch()

    function handleClick() {
        dispatch(showNav())
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
            <LanguageSelect />
        </div>
    )
}

export default Header
