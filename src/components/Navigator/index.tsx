import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { hideNav, selectNavDisplay } from '@/store/nav_display.ts'
import SearchBar from '@/components/SearchBar'
import { PlusIcon } from '@/components/Icon'
import './Navigator.less'

function SystemCard({ text }: { text: string }) {
    const [isActive, setIsActive] = useState<boolean>(false)

    function handleClick() {
        setIsActive(!isActive)
    }

    return (
        <div
            className={'system-card' + isActive ? ' system-card--active' : ''}
            onClick={handleClick}>
            {text}
        </div>
    )
}

function AddSystemButton({ handler }: { handler: () => void }) {
    return (
        <div
            className="add-system-button system-card"
            onClick={handler}>
            <PlusIcon />
        </div>
    )
}

function HideNavButton() {
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
                        <AddSystemButton handler={redirectToAddPlatform} />
                    </div>
                    <div className="system-list">
                        <SystemCard text="微博" />
                        <SystemCard text="微博" />
                        <SystemCard text="微博" />
                        <SystemCard text="微博" />
                        <SystemCard text="微博" />
                        <SystemCard text="微博" />
                        <SystemCard text="QQ" />
                    </div>
                </div>
                <HideNavButton />
            </div>
        </div>
    )
}

export default Navigator
