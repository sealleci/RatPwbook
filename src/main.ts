/**
 * Electron entry.
 */

import { app, BrowserWindow, Menu } from "electron";
import * as path from "path";
let window: Electron.BrowserWindow;

function createWindow() {
    Menu.setApplicationMenu(null);
    window = new BrowserWindow({
        width: 800,
        height: 700,
        minWidth: 500,
        minHeight: 200,
        webPreferences: {
            preload: path.join(__dirname, "./preload.js")
        },
        icon: path.join(__dirname, "../img/favicon.png")
    });

    window.loadFile("../html/index.html");
    // window.webContents.openDevTools();
    window.on("closed", () => {
        window = null as any;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

