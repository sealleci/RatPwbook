import { useRef, useEffect, useMemo, useState } from 'react'
import { DropDownIcon } from '@/components/Icon'
import './MySelect.less'

interface ItemProps {
    value: string
    name: string
}

function MySelectItem({ value, text, handler, isSelected, key }: {
    value: string,
    text: string,
    handler: (event: React.MouseEvent<HTMLDivElement>) => void,
    isSelected: boolean,
    key: number
}) {
    return (
        <div
            className={'my-select__item' + isSelected ? ' my-select__item--selected' : ''}
            onClick={handler}
            data-value={value}
            key={key}
        >
            {text}
        </div>
    )
}

function MySelect() {
    // temp date
    const itemList: ItemProps[] = [
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
    // definitions
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
        <div className={'my-select' + isExpended ? ' my-select--expanded' : ''}>
            <div className="my-select__container" ref={containerRef} onClick={clickContainer}>
                <div>{itemList.find(item => item.value === selectedValue)?.name}</div>
                <div>
                    <DropDownIcon />
                </div>
            </div>
            <div className="my-select__modal" ref={modalRef} onClick={clickModal}>
                <div className="my-select__list" ref={listRef}>
                    {
                        itemList.map(
                            (item, index) => (
                                <MySelectItem
                                    value={item.value}
                                    text={item.name}
                                    handler={(event) => clickItem(event, item.value)}
                                    isSelected={selectedValue === item.value}
                                    key={index}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MySelect
