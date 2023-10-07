import { useNavigate } from 'react-router-dom'
import { EyeCloseIcon, EyeOpenIcon } from '@/components/Icon'
import '@/css/AccountDetailPage.css'

function AccountDetailPage() {
    const navigate = useNavigate()

    function backToAccount() {
        navigate('/account')
    }

    function redirectToEdit() {
        navigate('/edit')
    }

    return (
        <div id="account-detail-page">
            <div className="system-wrap">
                <div className="system-header">
                    <div className="system-name">
                        <input className="copy-field" value="微信" readOnly />
                    </div>
                    <div className="system-url">
                        <input className="copy-field" value="weixin.com/home?spam=123&a=456" readOnly />
                    </div>
                </div>
            </div>
            <div className="page-header">
                <div id="back-to-list-button" className="custom-button" onClick={backToAccount}>
                    <div></div>
                    <div data-l10nkey="BACK_TO_LIST_BUTTON">返回</div>
                </div>
                <div className="account-name">
                    <input className="copy-field" value="超级大鼠" readOnly />
                </div>
                <div className="page-button-wrap">
                    <div id="account-edit-button" className="custom-button" data-l10nkey="ACCOUNT_EDIT_BUTTON"
                        onClick={redirectToEdit}>
                        修改
                    </div>
                    <div id="account-delete-button-wrap">
                        <div id="account-delete-button" className="custom-button" data-l10nkey="ACCOUNT_DELETE_BUTTON">
                            删除
                        </div>
                        <div id="account-delete-check" style={{ display: 'none' }}>
                            <div id="account-delete-cancel-button" className="custom-button"
                                data-l10nkey="ACCOUNT_DELETE_CANCEL_BUTTON">
                                取消
                            </div>
                            <div id="account-delete-confirm-button" className="custom-button"
                                data-l10nkey="ACCOUNT_DELETE_CONFIRM_BUTTON">
                                确认
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="account-main-part">
                    <div className="account-infomation-part">
                        <div className="account-field">
                            <div className="account-field-key" data-l10nkey="ACCOUNT_LOGID">
                                <div>帐号</div>
                            </div>
                            <input className="account-field-value copy-field" value="1234567890" readOnly />
                        </div>
                        <div className="account-field">
                            <div className="account-field-key" data-l10nkey="ACCOUNT_EMAIL">
                                <div>邮箱</div>
                            </div>
                            <input className="account-field-value copy-field" value="1234567890" readOnly />
                        </div>
                        <div className="account-field">
                            <div className="account-field-key" data-l10nkey="ACCOUNT_PHONE">
                                <div>电话</div>
                            </div>
                            <input className="account-field-value copy-field" value="1234567890" readOnly />
                        </div>
                        <div className="account-field">
                            <div className="account-field-key" data-l10nkey="ACCOUNT_COMMENT">
                                <div>Comment</div>
                            </div>
                            <input className="account-field-value copy-field" value="1234567890" readOnly />
                        </div>
                    </div>
                    <div className="account-password-part">
                        <div className="account-field">
                            <div className="account-field-key" data-l10nkey="ACCOUNT_CURRENT_PASSWORD">
                                <div>Password</div>
                            </div>
                            <div className="account-secret-field-wrap">
                                <div className="account-secret-field-value">
                                    <div></div>
                                    <input className="account-field-value copy-field" value="1234567890" readOnly />
                                </div>
                                <div className="eye-icon-wrap">
                                    {<EyeCloseIcon /> ?? <EyeOpenIcon />}
                                </div>
                            </div>
                        </div>
                        <div className="past-passwords">
                            <div className="past-passwords-header account-field">
                                <div className="account-field-key" data-l10nkey="ACCOUNT_PAST_PASSWORDS">
                                    曾用密码
                                </div>
                                <div className="account-field-empty"></div>
                            </div>
                            <div className="past-passwords-list">
                                <div className="account-field">
                                    <div className="account-field-key">
                                        <div>1.</div>
                                    </div>
                                    <div className="account-secret-field-wrap">
                                        <div className="account-secret-field-value">
                                            <div></div>
                                            <input className="account-field-value copy-field" value="1234567890" readOnly />
                                        </div>
                                        <div className="eye-icon-wrap">
                                            {<EyeCloseIcon /> ?? <EyeOpenIcon />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account-protection-part">
                    <div className="account-protection-header account-field">
                        <div className="account-field-key" data-l10nkey="ACCOUNT_PROTECTION">
                            密保问题
                        </div>
                        <div className="account-field-empty"></div>
                    </div>
                    <div className="account-protection-list">
                        <div className="account-protection-item">
                            <div className="account-protection-number">
                                1.
                            </div>
                            <div className="account-field">
                                <div className="account-field-question">
                                    <div>陈瑞捏</div>
                                </div>
                                <div className="account-secret-field-wrap">
                                    <div className="account-secret-field-value">
                                        <div></div>
                                        <input className="account-field-value copy-field" value="1234567890" readOnly />
                                    </div>
                                    <div className="eye-icon-wrap">
                                        {<EyeCloseIcon /> ?? <EyeOpenIcon />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountDetailPage
