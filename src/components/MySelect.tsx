import { useRef, useEffect, useMemo } from 'react'
import { DropDownIcon } from './Icon'
import '@/css/MySelect.css'

function MySelect() {
    const selectRef = useRef<HTMLDivElement>(null)
    const observer = useMemo(() => new ResizeObserver(
        () => {

        }
    ), [])

    useEffect(() => {
        observer.observe(document.body)
    }, [observer])

    return (
        <div className="my_select">
            <div className="my_select__container" ref={selectRef}>
                <div>中文</div>
                <div>
                    <DropDownIcon />
                </div>
            </div>
            <div className="my_select__modal">
                <div className="my_select__list">
                    <div className="my_select__item--selected" data-value="0">中文</div>
                    <div data-value="1">English</div>
                    <div data-value="2">日本語</div>
                    <div data-value="3">Русский</div>
                </div>
            </div>
        </div>
    )
}

export default MySelect
