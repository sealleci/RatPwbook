import '../css/Navigator.css'

function Navigator() {
    return (
        <div id="navigator-bar">
            <div id="navigator-content">
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
                <div id="navigator-system-list-wrap">
                    <div id="system-add-card-wrap">
                        <div id="system-add-card" className="system-card">
                            <div className="plus-icon custom-icon">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div id="navigator-system-list">
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        <div className="system-card">微博</div>
                        {/* <div className="system-card system-card-active">QQ</div> */}
                    </div>
                </div>
                <div id="hide-navigator-button-wrap">
                    <div id="hide-navigator-button">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigator
