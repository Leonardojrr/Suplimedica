const { app, ipcMain, BrowserWindow } = require("electron");

const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1100,
        height: 618.75,
        minWidth: 1100,
        minHeight: 619,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL("http://localhost:3000");
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", () => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

//Window communication with electron
ipcMain.on("minimize", (e) => {
    mainWindow.minimize();
});

ipcMain.on("maximize", (e) => {
    mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
});

ipcMain.on("close", (e) => {
    mainWindow.close();
});
