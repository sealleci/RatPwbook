import { useRef, useEffect, useMemo, useState } from 'react'
import { DropDownIcon } from '@/components/Icon'
import './MySelect.less'

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
    function setListPosition() {
        if (!modalRef.current || !listRef.current || !containerRef.current) { return }

        const containerRect = containerRef.current.getBoundingClientRect()

        listRef.current.style.left = `${containerRect.left}px`
        listRef.current.style.top = `calc(${containerRect.bottom}px + .25rem)`
    }
    const observer = useMemo(() => new ResizeObserver(
        () => {
            setListPosition()
        }
    ), [])

    function clickContainer() {
        if (!modalRef.current) { return }

        console.log
        setListPosition()
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
        <div className={isExpended ? 'my_select my_select--expanded' : 'my_select'}>
            <div className="my_select__container" ref={containerRef} onClick={clickContainer}>
                <div>{itemList.find(item => item.value === selectedValue)?.name}</div>
                <div>
                    <DropDownIcon />
                </div>
            </div>
            <div className="my_select__modal" ref={modalRef} onClick={clickModal}>
                <div className="my_select__list" ref={listRef}>
                    {
                        itemList.map(
                            (item, index) => (
                                <div
                                    className={selectedValue === item.value ? 'my_select__item my_select__item--selected' : 'my_select__item'}
                                    onClick={(event) => clickItem(event, item.value)}
                                    data-value={item.value}
                                    key={index}
                                >{item.name}</div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MySelect
