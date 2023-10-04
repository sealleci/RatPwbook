import '../css/LanguageSelect.css'

function LanguageSelect() {
    return (
        <div className="custom-select" id="language-select" >
            <div className="select-selected-wrap">
                <div className="select-selected" data-value="0">中文</div>
                <div className="select-arrow select-arrow-active"></div>
            </div>
            <div className="select-items select-hide">
                <div className="same-as-selected" data-value="0">中文</div>
                <div data-value="1">English</div>
                <div data-value="2">Ratling</div>
            </div>
        </div>
    )
}

export default LanguageSelect
