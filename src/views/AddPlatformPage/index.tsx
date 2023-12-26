import { useNavigate } from 'react-router-dom'
import './AddPlatformPage.less'

function AddPlatformPage() {
    const navigate = useNavigate()

    function backToAccount() {
        navigate('/account')
    }

    return (
        <div id="system-add-page">
            <div id="system-name-field" className="account-field">
                <div className="account-field-key" data-l10n="SYSTEM_NAME">
                    <div>System Name</div>
                </div>
                <input className="account-field-value edit-field" value="" />
            </div>
            <div id="system-url-field" className="account-field">
                <div className="account-field-key" data-l10n="SYSTEM_URL">
                    <div>系统链接</div>
                </div>
                <input className="account-field-value edit-field" value="" />
            </div>
            <div id="system-add-cancel-button" className="button__base" data-l10n="SYSTEM_ADD_CANCEL_BUTTON"
                onClick={backToAccount}>
                取消添加
            </div>
            <div id="system-add-confirm-button" className="button__base" data-l10n="SYSTEM_ADD_CONFIRM_BUTTON">
                确认添加
            </div >
        </div >
    )
}

export default AddPlatformPage
