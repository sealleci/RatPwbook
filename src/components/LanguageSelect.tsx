import '../css/LanguageSelect.css'

function LanguageSelect() {
    return (
        <div id="language-bar">
            <div id="show-navigator-bar-button" className="custom-button">
                <div className="custom-icon list-icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div id="message-bar">
                <div style={{ display: "block" }}>
                    {
                        // 列表为空
                    }
                </div>
            </div>
            {/* < div className="custom-select" id="language-select" >
                <div className="select-selected-wrap">
                    <div className="select-selected" value="0">中文</div>
                    <div className="select-arrow select-arrow-active"></div>
                </div>
                <div className="select-items select-hide">
                    <div className="same-as-selected" value="0">中文</div>
                    <div value="1">English</div>
                    <div value="2">Ratling</div>
                </div>
            </div > */}
        </div >
    )
}

export default LanguageSelect
