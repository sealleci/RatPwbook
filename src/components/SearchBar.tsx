import { SearchIcon } from './Icon'
import '@/css/SearchBar.css'

function SearchBar() {
    return (
        <div id="navigator-search-bar">
            <div id="navigator-search-bar-left" className="navigator-search-bar-end"></div>
            <div id="navigator-search-input-wrap">
                <input type="text" id="navigator-search-input" data-l10n="SEARCH_PLACEHOLDER" placeholder="搜索" />
                <SearchIcon />
            </div>
            <div id="navigator-search-bar-right" className="navigator-search-bar-end"></div>
        </div>
    )
}

export default SearchBar
