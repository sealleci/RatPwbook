import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EyeCloseIcon, EyeOpenIcon, PlusIcon } from '@/components/Icon'
import '@/css/EditAccountDetailPage.css'

function EditAccountDetailPage() {
    const [isAddNew, setIsAddNew] = useState<boolean>(false)
    const navigate = useNavigate()

    function backToDetail() {
        if (isAddNew) {
            navigate('/account')
        } else {
            navigate('/detail')
        }
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const src = params.get('src')

        if (src === 'new') {
            setIsAddNew(true)
        }
    }, [])

    return (
        <div id="account-edit-page">
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
                <div id="account-edit-name" className="account-field">
                    <input className="account-field-value edit-field" value="超级大鼠" />
                </div>
                <div className="page-button-wrap">
                    <div id="account-edit-cancel-button" className="custom-button" data-l10nkey="ACCOUNT_EDIT_CANCEL_BUTTON"
                        onClick={backToDetail}>
                        Cancel edition1111
                    </div>
                    <div id="account-edit-confirm-button" className="custom-button" data-l10nkey="ACCOUNT_EDIT_CONFIRM_BUTTON">
                        Confirm edition1111
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="account-main-part">
                    <div className="account-infomation-part">
                        <div id="account-logid-field" className="account-field">
                            <div className="account-field-key" data-l10nkey="ACCOUNT_LOGID">
                                <div>帐号</div>
                            </div>
                            <input className="account-field-value edit-field" value="1234567890" />
                        </div>
                        <div id="account-email-field" className="account-field">
                            <div className="account-field-key" data-l10nkey="ACCOUNT_EMAIL">
                                <div>邮箱</div>
                            </div>
                            <input className="account-field-value edit-field" value="1234567890" />
                        </div>
                        <div id="account-phone-field" className="account-field">
                            <div className="account-field-key" data-l10nkey="ACCOUNT_PHONE">
                                <div>电话</div>
                            </div>
                            <input className="account-field-value edit-field" value="1234567890" />
                        </div>
                        <div id="account-comment-field" className="account-field">
                            <div className="account-field-key" data-l10nkey="ACCOUNT_COMMENT">
                                <div>Comment</div>
                            </div>
                            <input className="account-field-value edit-field" value="1234567890" />
                        </div>
                    </div>
                    <div className="account-password-part">
                        <div id="account-password-field" className="account-field">
                            <div className="account-field-key" data-l10nkey="ACCOUNT_CURRENT_PASSWORD">
                                <div>Password</div>
                            </div>
                            <div className="account-secret-field-wrap account-secret-edit-field-wrap">
                                <input className="account-field-value secret-edit-field" value="1234567890" type="password"
                                    readOnly />
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
                                    <div className="account-secret-field-wrap account-secret-edit-field-wrap">
                                        <input className="account-field-value secret-edit-field" value="1234567890"
                                            type="password" readOnly />
                                        <div className="eye-icon-wrap">
                                            {<EyeCloseIcon /> ?? <EyeOpenIcon />}
                                        </div>
                                    </div>
                                    <div className="password-delete-button custom-button">删除</div>
                                </div>
                                <div className="past-password-add-button custom-button">
                                    <PlusIcon />
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
                                    <input className="account-field-value edit-field" value="1234567890" />
                                </div>
                                <div className="account-secret-field-wrap account-secret-edit-field-wrap">
                                    <input className="account-field-value secret-edit-field" value="1234567890"
                                        type="password" readOnly />
                                    <div className="eye-icon-wrap">
                                        {<EyeCloseIcon /> ?? <EyeOpenIcon />}
                                    </div>
                                </div>
                            </div>
                            <div className="protection-delete-button custom-button">删除</div>
                        </div>
                        <div className="protection-add-button custom-button">
                            <PlusIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditAccountDetailPage
