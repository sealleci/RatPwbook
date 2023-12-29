import { SearchIcon } from '@/components/Icon'
import './SearchBar.less'

function SearchBar() {
    return (
        <div className="search-bar">
            <div className="search-bar__left navigator-search-bar__end"></div>
            <div className="search-input-wrapper">
                <input type="text" data-l10n="SEARCH_PLACEHOLDER" placeholder="搜索" />
                <SearchIcon />
            </div>
            <div className="search-bar__right navigator-search-bar__end"></div>
        </div>
    )
}

export default SearchBar
