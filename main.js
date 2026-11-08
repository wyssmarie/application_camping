const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Pour l'instant, on peut charger une page HTML locale ou un message de test, 
  // ou pointer directement vers votre front-end.
  //mainWindow.loadURL('data:text/html;charset=utf-8,<html><body><h1>Mon Projet Camping - Electron en cours...</h1></body></html>');
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));
  
  mainWindow.webContents.openDevTools();
  }

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.saveData ? null : app.quit();
});