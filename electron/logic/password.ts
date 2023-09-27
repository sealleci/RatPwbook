/**
 * Main Process. 
*/

class Password {
    private _value: string
    constructor() {
        this._value = ''
    }

    // return the encrypted
    get value(): string {
        // return Buffer.from(this._value, 'base64').toString('ascii')
        return this._value
    }

    // receive the encrypted
    set value(password: string) {
        // this._value = Buffer.from(password, 'ascii').toString('base64')
        this._value = password
    }
    toString(): string {
        return `'${this._value}'`
    }
}

class PasswordProtection {
    public question: string
    public _answer: string
    constructor(question: string) {
        this.question = question
        this._answer = ''
    }
    get answer(): string {
        return Buffer.from(this._answer, 'base64').toString('ascii')
    }
    set answer(raw_answer: string) {
        this._answer = Buffer.from(raw_answer, 'ascii').toString('base64')
    }
    toString(): string {
        return `{'question':'${this.question}','answer':'${this._answer}'}`
    }
}

enum LoginTokenType {
    EMAIL = 'email',
    PHONE = 'phone',
    LOGID = 'logid',
}

class LoginName {
    public type: LoginTokenType
    public value: string
    constructor(type: LoginTokenType, value: string) {
        this.type = type
        this.value = value
    }
    toString(): string {
        return `{'type':'${this.type}','value':'${this.value}'}`
    }
}

// TODO: generate uuid
class Account {
    public nick_name: string
    public login_names: LoginName[]
    public password: Password
    public past_passwords: Password[]
    public protections: PasswordProtection[]
    public remark: string
    public id: string
    constructor(password: Password, id: string) {
        this.nick_name = ''
        this.login_names = []
        this.password = password
        this.past_passwords = []
        this.protections = []
        this.remark = ''
        this.id = id
    }
    toString(): string {
        return `{'id':'${this.id}','nick_name':'${this.nick_name}','login_names':[${this.login_names.join(',')}],'password':${this.password},'past_passwords':[${this.past_passwords.join(',')}],'protections':[${this.protections.join(',')}],'remark':'${this.remark}'}`
    }
}

class TargetPlatform {
    public name: string
    public url: string
    public accounts: Account[]
    public id: string
    constructor(name: string, url: string, id: string) {
        this.name = name
        this.url = url
        this.accounts = []
        this.id = id
    }
    toString(): string {
        return `{'id':'${this.id}','name':'${this.name}','url':'${this.url}','accounts':[${this.accounts.join(',')}]}`
    }
}