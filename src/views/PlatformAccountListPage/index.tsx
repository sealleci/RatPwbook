import { useNavigate } from 'react-router-dom'
import { EyeCloseIcon, EyeOpenIcon, DetailIcon, PlusIcon } from '@/components/Icon'
import './PlatformAccountListPage.less'

function PlatformListPage() {
    const navigate = useNavigate()

    function redirectToDetail() {
        navigate('/detail')
    }

    function redirectToAddAccount() {
        navigate('/edit?src=new')
    }

    return (
        <div id="system-list-page" className="system-list-wrap">
            <div className="system-wrap">
                <div className="system-header">
                    <div className="system-name">
                        <input className="copy-field" value="微信" readOnly />
                    </div>
                    <div className="system-url">
                        <input className="copy-field" value="weixin.com/home?spam=123&a=456" readOnly />
                    </div>
                    <div className="system-delete-wrap">
                        <div className="system-delete-button custom-button" data-l10n="SYSTEM_DELETE_BUTTON"
                            style={{ display: 'block' }}>
                            删除</div>
                        <div className="system-delete-check" style={{ display: 'none' }}>
                            <div className="system-delete-cancel-button custom-button"
                                data-l10n="SYSTEM_DELETE_CANCEL_BUTTON">
                                Cancel
                            </div>
                            <div className="system-delete-confirm-button custom-button"
                                data-l10n="SYSTEM_DELETE_CONFIRM_BUTTON">
                                确认删除
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account-list">
                    <div className="account-card">
                        <div className="account-name">
                            <input className="copy-field" value="超级大鼠" readOnly />
                        </div>
                        <div className="account-field">
                            <div className="account-field-key" data-l10n="ACCOUNT_LOGID">
                                <div>帐号</div>
                            </div>
                            <input className="account-field-value copy-field" value="1234567890000000000000000" readOnly />
                        </div>
                        <div className="account-field">
                            <div className="account-field-key" data-l10n="ACCOUNT_EMAIL">
                                <div>邮箱</div>
                            </div>
                            <input className="account-field-value copy-field" value="1594890315@qq.com" readOnly />
                        </div>
                        <div className="account-field">
                            <div className="account-field-key" data-data-l10n="ACCOUNT_PHONE">
                                <div>电话</div>
                            </div>
                            <input className="account-field-value copy-field" value="1234567890" readOnly />
                        </div>
                        <div className="account-field">
                            <div className="account-field-key" data-l10n="ACCOUNT_CARD_PASSWORD">
                                <div>密码</div>
                            </div>
                            <div className="account-secret-field-wrap">
                                <div className="account-secret-field-value">
                                    <div className="" style={{ display: 'block' }}></div>
                                    <input className="account-field-value copy-field" value="1234567890" readOnly />
                                </div>
                                <div className="eye-icon-wrap">
                                    {<EyeCloseIcon /> ?? <EyeOpenIcon />}
                                </div>
                            </div>
                        </div>
                        <div className="account-field">
                            <div className="account-field-key" data-l10n="ACCOUNT_COMMENT">
                                <div>备注</div>
                            </div>
                            <input className="account-field-value copy-field" value="1234567890" readOnly />
                        </div>
                        <div className="account-detail-button custom-button" onClick={redirectToDetail}>
                            <div data-l10n="ACCOUNT_DETAIL_BUTTON">
                                查看详情
                            </div>
                            <DetailIcon />
                        </div>
                    </div>
                    <div className="account-card" id="plus-account-card" onClick={redirectToAddAccount}>
                        <PlusIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatformListPage
