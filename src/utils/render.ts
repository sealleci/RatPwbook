/**
 * Render Process. 
*/

function sleep(millisecond: number): Promise<any> {
    return new Promise((resolve: (value: any) => void) => {
        setTimeout(resolve, millisecond);
    });
}

class RenderLogger {
    static is_debugging: boolean = false;
    static print(message: string): void {
        if (this.is_debugging) {
            console.log(message);
        }
    }
}

class FrontendPassword {
    private _value: string;
    constructor() {
        this._value = "";
    }

    get value() {
        return decodeURIComponent(atob(this._value));
    }

    set value(raw_password: string) {
        this._value = btoa(encodeURIComponent(raw_password));
    }
}

class FrontendProcess {

}

abstract class AbstractCustomSelect {
    public id: string;
    public custom: HTMLElement;
    public selected: HTMLElement;
    public items: HTMLElement;
    public select_arrow: HTMLElement;
    public selected_wrap: HTMLElement;

    constructor(id: string, custom: HTMLElement, selected: HTMLElement, items: HTMLElement, select_arrow: HTMLElement, selected_wrap: HTMLElement) {
        this.id = id;
        this.custom = custom;
        this.selected = selected;
        this.items = items;
        this.select_arrow = select_arrow;
        this.selected_wrap = selected_wrap;
    }

    abstract update(value: string): void;
    abstract hide(): void;
    abstract show(): void;
    abstract toggleDisplay(): void;
}

/**
 * L10N string field attribute in HTML: l10nkey="FIELD_ID"
 * and the placeholder of input element
 */
class L10N {
    static language_dictionary: Map<string, JSON> = new Map();
    static current_language: string = "";

    static load(callback: (custom: AbstractCustomSelect) => void, custom: AbstractCustomSelect) {
        sleep(100).then(() => {
            callback(custom);
            RenderLogger.print("loaded");
        });
    }

    static switch(type: string) {
        if (Array.from(this.language_dictionary.keys()).indexOf(type) === -1) {
            return;
        }
    }
}

// custom select component
class CustomSelect extends AbstractCustomSelect {
    public option: string;
    public is_loading: boolean;

    constructor(id: string, custom: HTMLElement, selected: HTMLElement, items: HTMLElement, select_arrow: HTMLElement, selected_wrap: HTMLElement) {
        super(id, custom, selected, items, select_arrow, selected_wrap);
        this.option = "";
        this.is_loading = true;
    }

    update(value: string) {
        this.option = value ?? "";
        L10N.switch(this.option);
    }

    hide() {
        this.select_arrow.classList.remove("select-arrow-active");
        this.items.classList.add("select-hide");
    }

    show() {
        this.select_arrow.classList.add("select-arrow-active");
        this.items.classList.remove("select-hide");
    }

    toggleDisplay() {
        if (this.select_arrow.classList.contains("select-arrow-active")) {
            this.hide();
        }

        else {
            this.show();
        }
    }

    static bind(custom: AbstractCustomSelect) {
        // click drop list
        custom.selected_wrap.addEventListener("click", (event: Event) => {
            event.stopPropagation();
            custom.toggleDisplay();
        });

        // click list item
        for (let i = 0; i < custom.items.children.length; ++i) {
            custom.items.children[i].addEventListener("click", (event: Event) => {
                event.stopPropagation();
                custom.hide();

                if (!custom.items.children[i].hasAttribute("value")) {
                    return;
                }

                const value = custom.items.children[i].getAttribute("value") ?? "";

                if (custom.selected.getAttribute("value") === value) {
                    return;
                }

                custom.update(value);

                for (let j = 0; j < custom.items.children.length; ++j) {
                    custom.items.children[j].classList.remove("same-as-selected");
                }

                custom.items.children[i].classList.add("same-as-selected");
                custom.selected.setAttribute("value", value);
                custom.selected.innerHTML = custom.items.children[i].innerHTML;
            });
        }
    }

    // when click outside the select, close the list
    static closeSelectItems(event: Event) {
        const element = event.target as HTMLElement;
        const custom_selects: NodeListOf<HTMLElement> = document.querySelectorAll(".custom-select");

        for (let i = 0; i < custom_selects.length; ++i) {
            if (element !== custom_selects[i].querySelector(".select-selected") && element !== custom_selects[i].querySelector(".select-items") && Array.from(custom_selects[i].querySelectorAll(".select-items>div")).indexOf(element) === -1) {
                custom_selects[i].querySelector(".select-arrow")?.classList.remove("select-arrow-active");
                custom_selects[i].querySelector(".select-items")?.classList.add("select-hide");
            }
        }
    }

    // create a new select component
    static create(id: string, parent: HTMLElement, options: Map<string, string>): CustomSelect {
        const custom_element = document.createElement("div");
        const selected_wrap_element = document.createElement("div");
        const selected_element = document.createElement("div");
        const select_arrow_element = document.createElement("div");
        const items_element = document.createElement("div");

        custom_element.id = id;
        custom_element.classList.add("custom-select");
        selected_wrap_element.classList.add("select-selected-wrap");
        selected_element.classList.add("select-selected");
        select_arrow_element.classList.add("select-arrow");
        items_element.classList.add("select-items", "select-hide");

        for (let i = 0; i < options.size; ++i) {
            const key = Array.from(options.keys())[i];
            const value = options.get(key) ?? "";
            const option_element = document.createElement("div");
            option_element.setAttribute("value", key);
            option_element.innerHTML = value;

            if (i === 0) {
                selected_element.setAttribute("value", i.toString());
                selected_element.innerHTML = value;
                option_element.classList.add("same-as-selected");
            }

            items_element.appendChild(option_element);
        }

        selected_wrap_element.appendChild(selected_element);
        selected_wrap_element.appendChild(select_arrow_element);
        custom_element.appendChild(selected_wrap_element);
        custom_element.appendChild(items_element);
        parent.appendChild(custom_element);

        return new CustomSelect(id, custom_element, selected_element, items_element, select_arrow_element, selected_wrap_element);
    }
}

enum PageType {
    LIST = "list",
    ACCOUNT_DETAIL = "account_detail",
    ACCOUNT_EDIT = "account_edit",
    SYSTEM_ADD = "system_add"
}

abstract class Page {
    public type: PageType;
    public page_body: HTMLElement;
    constructor(type: PageType, page_body: HTMLElement) {
        this.type = type;
        this.page_body = page_body;
    }
}

class ListPage extends Page {
    constructor(page_body: HTMLElement) {
        super(PageType.LIST, page_body);
    }
}

class AccountDetailPage extends Page {
    constructor(page_body: HTMLElement) {
        super(PageType.ACCOUNT_DETAIL, page_body);
    }
}

class AccountEditPage extends Page {
    constructor(page_body: HTMLElement) {
        super(PageType.ACCOUNT_EDIT, page_body);
    }
}

class SystemAddPage extends Page {
    constructor(page_body: HTMLElement) {
        super(PageType.SYSTEM_ADD, page_body);
    }
}

function bindSystemDeleteButtons() {
    const delete_wraps: NodeListOf<HTMLElement> = document.querySelectorAll(".system-delete-wrap");
    for (let i = 0; i < delete_wraps.length; ++i) {
        const delete_button: HTMLElement = delete_wraps[i].querySelector(".system-delete-button") ?? <HTMLElement>{};
        const delete_cancel_button: HTMLElement = delete_wraps[i].querySelector(".system-delete-cancel-button") ?? <HTMLElement>{};
        const delete_confirm_button: HTMLElement = delete_wraps[i].querySelector(".system-delete-confirm-button") ?? <HTMLElement>{};
        const delete_check: HTMLElement = delete_wraps[i].querySelector(".system-delete-check") ?? <HTMLElement>{};

        delete_button.addEventListener("click", () => {
            if (delete_button.style.display !== "none") {
                delete_button.style.display = "none";
                delete_check.style.display = "flex";
            }
        });

        delete_cancel_button.addEventListener("click", () => {
            if (delete_check.style.display !== "none") {
                delete_check.style.display = "none";
                delete_button.style.display = "block";
            }
        });

        delete_confirm_button.addEventListener("click", () => { });
    }
}

function bindSecretEyeButtons() {
    const secrets: NodeListOf<HTMLElement> = document.querySelectorAll(".account-secret-field-wrap");
    for (let i = 0; i < secrets.length; ++i) {
        const secret_value: HTMLElement = secrets[i].querySelector(".account-secret-field-value") ?? <HTMLElement>{};
        const eye_wrap: HTMLElement = secrets[i].querySelector(".eye-icon-wrap") ?? <HTMLElement>{};
        eye_wrap.addEventListener("click", () => {
            const cover: HTMLElement = secret_value.querySelector("div:nth-child(1)") ?? <HTMLElement>{};
            const eye_close: HTMLElement = eye_wrap.querySelector(".eye-close-icon") ?? <HTMLElement>{};
            const eye_open: HTMLElement = eye_wrap.querySelector(".eye-open-icon") ?? <HTMLElement>{};
            if (eye_close.style.display !== "none") {
                eye_close.style.display = "none";
                eye_open.style.display = "flex";
                cover.classList.add("cover-hide");
            } else {
                eye_open.style.display = "none";
                eye_close.style.display = "flex";
                cover.classList.remove("cover-hide");
            }
        });
    }
}

// function bindDisplayNavigatorButtons() {
//     const show_button: HTMLElement = document.querySelector("#show-navigator-bar-button") ?? <HTMLElement>{};
//     const hide_button: HTMLElement = document.querySelector("#hide-navigator-button") ?? <HTMLElement>{};

//     show_button.addEventListener("click", () => {
//         const navigator_bar: HTMLElement = document.querySelector("#navigator-bar") ?? <HTMLElement>{};
//         // navigator_bar.style.setProperty("display", "block", "important");
//         navigator_bar.style.width = "100%";
//     });

//     hide_button.addEventListener("click", () => {
//         const navigator_bar: HTMLElement = document.querySelector("#navigator-bar") ?? <HTMLElement>{};
//         navigator_bar.style.width = "0%";
//     });
// }

// function observeDocumentSizeMutate() {
//     const observer = new ResizeObserver(() => {
//         const navigator_bar: HTMLElement = document.querySelector("#navigator-bar") ?? <HTMLElement>{};
//         if (document.body.offsetWidth > 640 && navigator_bar.style.width !== "100%") {
//             navigator_bar.style.width = "100%";
//         } else if (document.body.offsetWidth <= 640 && navigator_bar.style.width !== "0%") {
//             navigator_bar.style.width = "0%";
//         }
//     });
//     observer.observe(document.body);
// }

function bindAccountDeleteButtons() {
    const delete_button: HTMLElement = document.querySelector("#account-delete-button") ?? <HTMLElement>{};
    const check_wrap: HTMLElement = document.querySelector("#account-delete-check") ?? <HTMLElement>{};
    const cancel_button: HTMLElement = document.querySelector("#account-delete-cancel-button") ?? <HTMLElement>{};

    delete_button.addEventListener("click", () => {
        check_wrap.style.display = "flex";
        delete_button.style.display = "none";
        // delete_button.classList.add("unclickable");
    });

    cancel_button.addEventListener("click", () => {
        check_wrap.style.display = "none";
        delete_button.style.display = "block";
        // delete_button.classList.remove("unclickable");
    });
}

function hideElementsOfMain() {
    const main_content: HTMLElement = document.querySelector("#main") ?? <HTMLElement>{};

    for (let i = 0; i < main_content.children.length; ++i) {
        (main_content.children[i] as HTMLElement).style.display = "none";
    }
}

function bindDetailButuons() {
    const detail_buttons: NodeListOf<HTMLElement> = document.querySelectorAll(".account-detail-button");
    for (let i = 0; i < detail_buttons.length; ++i) {
        detail_buttons[i].addEventListener("click", () => {
            hideElementsOfMain();
            const detail_page: HTMLElement = document.querySelector("#account-detail-page") ?? <HTMLElement>{};
            detail_page.style.display = "flex";
        });
    }
}

function bindDetailPageBackButton() {
    const back_button: HTMLElement = document.querySelector("#back-to-list-button") ?? <HTMLElement>{};
    back_button.addEventListener("click", () => {
        const system_list: HTMLElement = document.querySelector("#system-list-page") ?? <HTMLElement>{};
        hideElementsOfMain();
        system_list.style.display = "flex";
    });
}

function bindSecretEditToggleButtons() {
    const secrets: NodeListOf<HTMLElement> = document.querySelectorAll(".account-secret-edit-field-wrap");
    for (let i = 0; i < secrets.length; ++i) {
        const secret_value: HTMLElement = secrets[i].querySelector(".secret-edit-field") ?? <HTMLElement>{};
        const eye_wrap: HTMLElement = secrets[i].querySelector(".eye-icon-wrap") ?? <HTMLElement>{};
        eye_wrap.addEventListener("click", () => {
            const eye_close: HTMLElement = eye_wrap.querySelector(".eye-close-icon") ?? <HTMLElement>{};
            const eye_open: HTMLElement = eye_wrap.querySelector(".eye-open-icon") ?? <HTMLElement>{};
            if (eye_close.style.display !== "none") {
                eye_close.style.display = "none";
                eye_open.style.display = "flex";
                secret_value.setAttribute("type", "text");
                secret_value.removeAttribute("readonly");
            } else {
                eye_open.style.display = "none";
                eye_close.style.display = "flex";
                secret_value.setAttribute("type", "password");
                secret_value.setAttribute("readonly", "true");
            }
        });
    }
}

function bindEitCheckButtons() {
    function backToDetailPage() {
        const detail_page: HTMLElement = document.querySelector("#account-detail-page") ?? <HTMLElement>{};

        hideElementsOfMain();
        detail_page.style.display = "flex";
    }

    const edit_confirm: HTMLElement = document.querySelector("#account-edit-confirm-button") ?? <HTMLElement>{};
    const edit_cancel: HTMLElement = document.querySelector("#account-edit-cancel-button") ?? <HTMLElement>{};

    edit_confirm.addEventListener("click", backToDetailPage);
    edit_cancel.addEventListener("click", backToDetailPage);
}

function bindGoToDetailPageButton() {
    const edit_button: HTMLElement = document.querySelector("#account-edit-button") ?? <HTMLElement>{};

    edit_button.addEventListener("click", () => {
        const edit_page: HTMLElement = document.querySelector("#account-edit-page") ?? <HTMLElement>{};

        hideElementsOfMain();
        edit_page.style.display = "flex";
    });
}

function bindSystemAddCheckButtons() {
    function backToListPage() {
        const list_page: HTMLElement = document.querySelector("#system-list-page") ?? <HTMLElement>{};

        hideElementsOfMain();
        list_page.style.display = "flex";
    }

    const add_confirm: HTMLElement = document.querySelector("#system-add-cancel-button") ?? <HTMLElement>{};
    const add_cancel: HTMLElement = document.querySelector("#system-add-confirm-button") ?? <HTMLElement>{};

    add_confirm.addEventListener("click", backToListPage);
    add_cancel.addEventListener("click", backToListPage);
}

function bindSystemAddCard() {
    const system_add: HTMLElement = document.querySelector("#system-add-card") ?? <HTMLElement>{};
    system_add.addEventListener("click", () => {
        const add_page: HTMLElement = document.querySelector("#system-add-page") ?? <HTMLElement>{};
        const navigator_bar: HTMLElement = document.querySelector("#navigator-bar") ?? <HTMLElement>{};

        hideElementsOfMain();
        add_page.style.display = "flex";

        if (document.body.offsetWidth <= 640 && navigator_bar.style.width !== "0%") {
            navigator_bar.style.width = "0%";
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    RenderLogger.is_debugging = true;
    document.addEventListener("click", CustomSelect.closeSelectItems);
    // observeDocumentSizeMutate();
    const language_select = CustomSelect.create("language-select",
        document.querySelector("#language-bar") ?? <HTMLElement>{},
        new Map([["ZH_CN", "中文"], ["EN", "English"]]));
    L10N.load(CustomSelect.bind, language_select);
    // bindSystemDeleteButtons();
    // bindSecretEyeButtons();
    // bindDisplayNavigatorButtons();
    // bindAccountDeleteButtons();
    // bindDetailButuons();
    // bindDetailPageBackButton();
    // bindSecretEditToggleButtons();
    // bindEitCheckButtons();
    // bindGoToDetailPageButton();
    // bindSystemAddCheckButtons();
    // bindSystemAddCard();
});