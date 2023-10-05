import '@/css/SearchBar.css'

function SearchBar() {
    return (
        <div id="navigator-search-bar">
            <div id="navigator-search-bar-left" className="navigator-search-bar-end"></div>
            <div id="navigator-search-input-wrap">
                <input type="text" id="navigator-search-input" data-l10nkey="SEARCH_PLACEHOLDER" placeholder="搜索" />
                <div className="search-icon custom-icon" id="search-button">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div id="navigator-search-bar-right" className="navigator-search-bar-end"></div>
        </div>
    )
}

export default SearchBar
