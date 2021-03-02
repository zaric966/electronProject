const { app,BrowserWindow } = require('electron');

function createWindow(){
    let win = new BrowserWindow({
        width:1000,
        height:750,
        x:100,
        y:200,
        // frame:false,
        resizable:false,
        webPreferences:{
            nodeIntegration:true
        }
    })
    win.loadFile('./index.html');
    win.on('close',()=>{
        win = null
    })
}

app.whenReady().then(()=>createWindow());