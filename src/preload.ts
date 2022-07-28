/** 
 * Access Node befor render.
*/

window.addEventListener("DOMContentLoaded", () => {
    function replaceText(selector: string, text: string) {
        const element = document.getElementById(selector);
        if (element) {
            element.innerText = text;
        }
    }

    const depencies = ["chrome", "node", "electron"];
    for (const depency of depencies) {
        replaceText(`${depency}-version`, process.versions[depency] ?? "");
    }
})