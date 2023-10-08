import { useRef, useEffect, useMemo, useState } from 'react'
import { DropDownIcon } from './Icon'
import '@/css/MySelect.css'

interface SelectItem {
    value: string
    name: string
}

function MySelect() {
    const itemList: SelectItem[] = [
        {
            value: 'zh_cn',
            name: '中文'
        }, {
            value: 'en',
            name: 'English'
        }, {
            value: 'jp',
            name: '日本語'
        }, {
            value: 'ru',
            name: 'Русский'
        }
    ]
    const setValue: (value: string) => void = (value: string) => {
        value
    }
    const containerRef = useRef<HTMLDivElement>(null)
    const modalRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)
    const [selectedValue, setSelectedValue] = useState<string>(itemList[0].value)
    const [isExpended, setIsExpended] = useState<boolean>(false)
    const observer = useMemo(() => new ResizeObserver(
        () => {

        }
    ), [])

    function clickContainer() {
        if (!modalRef.current || !listRef.current || !containerRef.current) { return }

        const containerRect = containerRef.current.getBoundingClientRect()

        listRef.current.style.left = `${containerRect.left}px`
        listRef.current.style.top = `calc(${containerRect.bottom}px + .25rem)`
        modalRef.current.style.visibility = 'visible'
        setIsExpended(true)
    }

    function clickModal() {
        if (!modalRef.current) { return }

        modalRef.current.style.visibility = 'hidden'
        setIsExpended(false)
    }

    function clickItem(event: React.MouseEvent<HTMLDivElement>, value: string) {
        setSelectedValue(value)
        setValue(value)
        event.stopPropagation()
        clickModal()
    }

    useEffect(() => {
        observer.observe(document.body)
    }, [observer])

    return (
        <div className={isExpended ? "my_select my_select--expanded" : "my_select"}>
            <div className="my_select__container" ref={containerRef} onClick={clickContainer}>
                <div>{itemList.find(item => item.value === selectedValue)?.name}</div>
                <div>
                    <DropDownIcon />
                </div>
            </div>
            <div className="my_select__modal" ref={modalRef} onClick={clickModal}>
                <div className="my_select__list" ref={listRef}>
                    {
                        itemList.map(item =>
                        (<div className={selectedValue === item.value ? 'my_select__item my_select__item--selected' : 'my_select__item'}
                            data-value={item.value} onClick={(event) => clickItem(event, item.value)}>{item.name}</div>)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MySelect
